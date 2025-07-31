import { Drill } from '../types/drill';

export const drills: Drill[] = [
  {
    id: 'drill-1',
    name: 'Basic Foundation Drill',
    description: 'A fundamental drilling exercise perfect for beginners. This drill focuses on proper stance, grip, and basic movement patterns.',
    image: '/textures/wood.jpg',
    tips: [
      'Maintain proper posture throughout the exercise',
      'Focus on smooth, controlled movements',
      'Start with shorter durations and gradually increase',
      'Keep your core engaged for stability'
    ],
    color: '#3B82F6',
    difficulty: 'Easy'
  },
  {
    id: 'drill-2',
    name: 'Advanced Precision Drill',
    description: 'An intermediate level drill that emphasizes accuracy and technique refinement. Designed to improve precision and timing.',
    image: '/textures/asphalt.png',
    tips: [
      'Pay attention to your breathing rhythm',
      'Visualize the target before executing',
      'Practice consistency over speed',
      'Take breaks between repetitions to maintain quality'
    ],
    color: '#10B981',
    difficulty: 'Medium'
  },
  {
    id: 'drill-3',
    name: 'Expert Challenge Drill',
    description: 'A challenging drill for experienced practitioners. Combines multiple techniques and requires excellent coordination and endurance.',
    image: '/textures/sand.jpg',
    tips: [
      'Warm up thoroughly before attempting',
      'Focus on maintaining form under fatigue',
      'Use mental preparation techniques',
      'Consider working with a spotter or coach',
      'Listen to your body and rest when needed'
    ],
    color: '#EF4444',
    difficulty: 'Hard'
  }
];
