const MinimapView = ({ cameraPosition }) => {
  const mapSize = 600;
  const scale = 48 / mapSize;

  return (
    <div className="w-full h-full bg-green-900/70">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-200/70 transform -translate-y-1/2"></div>
      <div className="absolute top-0 left-1/2 w-1 h-full bg-amber-200/70 transform -translate-x-1/2"></div>

      <div
        className="absolute w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${(cameraPosition.x + mapSize / 2) * scale + 24}px`,
          top: `${(cameraPosition.z + mapSize / 2) * scale + 24}px`,
        }}
      ></div>

      <div
        className="absolute w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-red-500 transform -translate-x-1/2"
        style={{
          left: `${(cameraPosition.x + mapSize / 2) * scale + 24}px`,
          top: `${(cameraPosition.z + mapSize / 2) * scale + 18}px`,
          transform: 'translateX(-50%) rotate(0deg)',
        }}
      ></div>
    </div>
  );
};

export default MinimapView;
