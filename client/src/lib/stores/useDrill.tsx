import { create } from "zustand";
import { Drill, DrillMarker } from "../../types/drill";
import { drills } from "../../data/drills";

type AppView = 'selector' | 'detail' | 'ar';

interface DrillState {
  // Data
  drills: Drill[];
  selectedDrill: Drill | null;
  placedMarkers: DrillMarker[];
  
  // UI State
  currentView: AppView;
  isARActive: boolean;
  
  // Actions
  selectDrill: (drillId: string) => void;
  setView: (view: AppView) => void;
  startAR: () => void;
  stopAR: () => void;
  placeDrillMarker: (position: [number, number, number]) => void;
  removeDrillMarker: (markerId: string) => void;
  clearAllMarkers: () => void;
}

export const useDrill = create<DrillState>((set, get) => ({
  // Initial state
  drills: drills,
  selectedDrill: null,
  placedMarkers: [],
  currentView: 'selector',
  isARActive: false,
  
  // Actions
  selectDrill: (drillId: string) => {
    const drill = drills.find(d => d.id === drillId);
    set({ selectedDrill: drill, currentView: 'detail' });
  },
  
  setView: (view: AppView) => {
    set({ currentView: view });
    if (view !== 'ar') {
      set({ isARActive: false });
    }
  },
  
  startAR: () => {
    set({ currentView: 'ar', isARActive: true });
  },
  
  stopAR: () => {
    set({ currentView: 'detail', isARActive: false });
  },
  
  placeDrillMarker: (position: [number, number, number]) => {
    const { selectedDrill, placedMarkers } = get();
    if (!selectedDrill) return;
    
    // Remove existing marker (only one at a time)
    const newMarker: DrillMarker = {
      id: `marker-${Date.now()}`,
      drillId: selectedDrill.id,
      position,
      rotation: [0, Math.random() * Math.PI * 2, 0]
    };
    
    set({ placedMarkers: [newMarker] });
  },
  
  removeDrillMarker: (markerId: string) => {
    set(state => ({
      placedMarkers: state.placedMarkers.filter(m => m.id !== markerId)
    }));
  },
  
  clearAllMarkers: () => {
    set({ placedMarkers: [] });
  }
}));
