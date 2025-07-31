import { useDrill } from "./lib/stores/useDrill";
import { DrillSelector } from "./components/DrillSelector";
import { DrillDetail } from "./components/DrillDetail";
import { ARScene } from "./components/ARScene";
import "@fontsource/inter";

function App() {
  const { currentView } = useDrill();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'selector':
        return <DrillSelector />;
      case 'detail':
        return <DrillDetail />;
      case 'ar':
        return <ARScene />;
      default:
        return <DrillSelector />;
    }
  };

  return (
    <div className="min-h-screen w-full">
      {renderCurrentView()}
    </div>
  );
}

export default App;
