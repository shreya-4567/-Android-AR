import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useDrill } from "../lib/stores/useDrill";
import { Drill as DrillIcon, Target, Zap } from "lucide-react";

export function DrillSelector() {
  const { drills, selectDrill } = useDrill();

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return <Target className="h-4 w-4" />;
      case 'Medium': return <DrillIcon className="h-4 w-4" />;
      case 'Hard': return <Zap className="h-4 w-4" />;
      default: return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AR Drill Trainer
          </h1>
          <p className="text-gray-600">
            Select a drill to practice with AR placement
          </p>
        </div>

        <div className="space-y-4">
          {drills.map((drill) => (
            <Card
              key={drill.id}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-2 hover:border-blue-300"
              onClick={() => selectDrill(drill.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    {drill.name}
                  </CardTitle>
                  <Badge className={getDifficultyColor(drill.difficulty)}>
                    <span className="flex items-center space-x-1">
                      {getDifficultyIcon(drill.difficulty)}
                      <span>{drill.difficulty}</span>
                    </span>
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-lg"
                    style={{ backgroundColor: drill.color }}
                  />
                  <p className="text-sm text-gray-600 line-clamp-2 flex-1">
                    {drill.description}
                  </p>
                </div>
                
                <Button 
                  className="w-full"
                  style={{ backgroundColor: drill.color }}
                >
                  Select Drill
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
