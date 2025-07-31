export interface Drill {
  id: string;
  name: string;
  description: string;
  image: string;
  tips: string[];
  color: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface DrillMarker {
  id: string;
  drillId: string;
  position: [number, number, number];
  rotation: [number, number, number];
}
