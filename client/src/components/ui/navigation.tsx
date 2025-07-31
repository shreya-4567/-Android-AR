import { ArrowLeft, Menu } from "lucide-react";
import { Button } from "./button";

interface NavigationProps {
  title: string;
  onBack?: () => void;
  onMenu?: () => void;
  showBack?: boolean;
  showMenu?: boolean;
}

export function Navigation({
  title,
  onBack,
  onMenu,
  showBack = false,
  showMenu = false
}: NavigationProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b relative z-50">
      <div className="flex items-center space-x-3">
        {showBack && onBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-lg font-semibold text-gray-900 truncate">
          {title}
        </h1>
      </div>
      
      {showMenu && onMenu && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenu}
          className="p-2"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
    </nav>
  );
}
