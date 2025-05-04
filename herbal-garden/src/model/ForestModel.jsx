'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import ForestScene from './assets/ForestScene';
import MinimapView from './assets/MinimapView';

const ForestModelViewer = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, z: 20 });

  useEffect(() => {
    const updateInterval = setInterval(() => {
      const camera = document.querySelector('canvas')?.['__r3f']?.camera;
      if (camera) {
        setCameraPosition({ x: camera.position.x, z: camera.position.z });
      }
    }, 100);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div id="Forest" className="relative w-full h-screen">
      <Canvas shadows camera={{ position: [0, 2, 20], fov: 60 }}>
        <ForestScene
          setSelectedInfo={setSelectedInfo}
          selectedInfo={selectedInfo}
        />
      </Canvas>

      {/* Minimap */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/30">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <MinimapView cameraPosition={cameraPosition} />
          </div>
          <div className="absolute top-2 left-2 text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded">
            Garden Map
          </div>
        </div>
      </div>

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg max-w-xs">
        <h3 className="font-bold mb-1">Garden Explorer</h3>
        <p className="text-sm">
          Use on-screen controls or WASD/arrow keys to move.
        </p>
        <p className="text-sm">
          Move close to a plant and click on it to learn more.
        </p>
        <p className="text-sm">Use the minimap in the top-right to navigate.</p>
      </div>
    </div>
  );
};

export default ForestModelViewer;
