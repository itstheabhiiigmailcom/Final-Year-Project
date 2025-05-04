import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const NavigationControls = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
      <div className="flex justify-center">
        <NavigationButton direction="forward" icon="arrow-up" />
      </div>
      <div className="flex justify-between gap-2">
        <NavigationButton direction="left" icon="arrow-left" />
        <NavigationButton direction="backward" icon="arrow-down" />
        <NavigationButton direction="right" icon="arrow-right" />
      </div>
    </div>
  );
};

const NavigationButton = ({ direction, icon }) => {
  const handleMove = () => {
    // Dispatch custom events that will be handled by CameraController
    const event = new CustomEvent('navigation-move', { detail: { direction } });
    window.dispatchEvent(event);
  };

  const getIcon = () => {
    switch (icon) {
      case 'arrow-up':
        return <ArrowUp className="w-6 h-6" />;
      case 'arrow-down':
        return <ArrowDown className="w-6 h-6" />;
      case 'arrow-left':
        return <ArrowLeft className="w-6 h-6" />;
      case 'arrow-right':
        return <ArrowRight className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <button
      className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 active:bg-white/70 transition-colors border border-white/50"
      onClick={handleMove}
      onTouchStart={handleMove}
    >
      {getIcon()}
    </button>
  );
};

export default NavigationControls;
