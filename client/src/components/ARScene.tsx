import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState, useCallback } from "react";
import { Navigation } from "./ui/navigation";
import { Button } from "./ui/button";
import { useDrill } from "../lib/stores/useDrill";
import { useTouch } from "../hooks/use-touch";
import * as THREE from "three";
import { Trash2, RotateCcw } from "lucide-react";

// Ground plane component
function GroundPlane({ onTouch }: { onTouch: (position: [number, number, number]) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const { getTouchIntersection } = useTouch();

  const handlePointerDown = useCallback((event: any) => {
    if (!meshRef.current) return;
    
    const intersection = getTouchIntersection(
      event.nativeEvent,
      camera,
      [meshRef.current]
    );
    
    if (intersection) {
      onTouch([intersection.point.x, intersection.point.y, intersection.point.z]);
    }
  }, [camera, getTouchIntersection, onTouch]);

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      onPointerDown={handlePointerDown}
    >
      <planeGeometry args={[20, 20, 10, 10]} />
      <meshStandardMaterial
        color="#2d5a27"
        wireframe={true}
        transparent={true}
        opacity={0.3}
      />
    </mesh>
  );
}

// Drill marker component
function DrillMarker({ marker, drill }: { marker: any; drill: any }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={marker.position} rotation={marker.rotation}>
      {/* Main drill marker */}
      <mesh ref={meshRef}>
        <coneGeometry args={[0.3, 1, 8]} />
        <meshStandardMaterial color={drill.color} />
      </mesh>
      
      {/* Base platform */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[0.5]} />
        <meshBasicMaterial
          color={drill.color}
          transparent={true}
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

// Lighting setup
function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={0.3} />
    </>
  );
}

// Camera controller
function CameraController() {
  const { camera } = useThree();
  
  useFrame(() => {
    // Simple orbit-like camera movement
    camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5 + 0;
    camera.position.z = Math.cos(Date.now() * 0.0005) * 0.5 + 8;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export function ARScene() {
  const { selectedDrill, placedMarkers, stopAR, placeDrillMarker, clearAllMarkers } = useDrill();
  const [showInstructions, setShowInstructions] = useState(true);

  if (!selectedDrill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No drill selected</p>
      </div>
    );
  }

  const handleGroundTouch = useCallback((position: [number, number, number]) => {
    placeDrillMarker(position);
    setShowInstructions(false);
  }, [placeDrillMarker]);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
      {/* Navigation overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation
          title={`AR: ${selectedDrill.name}`}
          showBack={true}
          onBack={stopAR}
        />
      </div>

      {/* AR Scene */}
      <Canvas
        camera={{
          position: [0, 3, 8],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance"
        }}
        className="touch-none"
      >
        <color attach="background" args={["#000011"]} />
        
        <Lights />
        <CameraController />
        
        <Suspense fallback={null}>
          <GroundPlane onTouch={handleGroundTouch} />
          
          {placedMarkers.map((marker) => (
            <DrillMarker
              key={marker.id}
              marker={marker}
              drill={selectedDrill}
            />
          ))}
        </Suspense>
      </Canvas>

      {/* Instructions overlay */}
      {showInstructions && (
        <div className="absolute inset-x-4 top-24 z-40">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-center">
            <h3 className="font-semibold mb-2">AR Drill Placement</h3>
            <p className="text-sm opacity-90">
              Tap on the green grid to place your drill marker
            </p>
          </div>
        </div>
      )}

      {/* Controls overlay */}
      {placedMarkers.length > 0 && (
        <div className="absolute bottom-4 left-4 right-4 z-40">
          <div className="flex space-x-2">
            <Button
              onClick={clearAllMarkers}
              variant="destructive"
              size="sm"
              className="flex-1"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Marker
            </Button>
            <Button
              onClick={() => setShowInstructions(true)}
              variant="secondary"
              size="sm"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Drill info overlay */}
      <div className="absolute top-24 right-4 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 min-w-[120px]">
          <div className="flex items-center space-x-2 mb-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selectedDrill.color }}
            />
            <span className="text-sm font-medium">{selectedDrill.name}</span>
          </div>
          <p className="text-xs text-gray-600">
            Markers: {placedMarkers.length}/1
          </p>
        </div>
      </div>
    </div>
  );
}
