import { useRef, useCallback } from 'react';
import * as THREE from 'three';

export interface TouchInfo {
  point: THREE.Vector3;
  screenX: number;
  screenY: number;
}

export function useTouch() {
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  const getTouchIntersection = useCallback((
    event: TouchEvent | MouseEvent,
    camera: THREE.Camera,
    targetObjects: THREE.Object3D[]
  ): TouchInfo | null => {
    let clientX: number, clientY: number;
    
    if ('touches' in event && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else if ('clientX' in event) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      return null;
    }

    // Convert screen coordinates to normalized device coordinates
    mouse.current.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(clientY / window.innerHeight) * 2 + 1;

    raycaster.current.setFromCamera(mouse.current, camera);
    
    const intersects = raycaster.current.intersectObjects(targetObjects, true);
    
    if (intersects.length > 0) {
      return {
        point: intersects[0].point,
        screenX: clientX,
        screenY: clientY
      };
    }
    
    return null;
  }, []);

  return { getTouchIntersection };
}
