import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Navigation } from "./ui/navigation";
import { useDrill } from "../lib/stores/useDrill";
import { Camera, CheckCircle, Info, Target } from "lucide-react";

export function DrillDetail() {
  const { selectedDrill, setView, startAR } = useDrill();

  if (!selectedDrill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No drill selected</p>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        title={selectedDrill.name}
        showBack={true}
        onBack={() => setView('selector')}
      />

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Drill Image */}
        <Card>
          <CardContent className="p-0">
            <div
              className="h-48 w-full rounded-t-lg flex items-center justify-center text-white text-4xl font-bold"
              style={{ backgroundColor: selectedDrill.color }}
            >
              <Target className="h-16 w-16" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">{selectedDrill.name}</h2>
                <Badge className={getDifficultyColor(selectedDrill.difficulty)}>
                  {selectedDrill.difficulty}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5" />
              <span>Description</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              {selectedDrill.description}
            </p>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Tips & Best Practices</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {selectedDrill.tips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* AR Button */}
        <div className="sticky bottom-4">
          <Button
            onClick={startAR}
            className="w-full py-3 text-lg font-semibold"
            style={{ backgroundColor: selectedDrill.color }}
          >
            <Camera className="h-5 w-5 mr-2" />
            Start AR Drill
          </Button>
        </div>
      </div>
    </div>
  );
}
