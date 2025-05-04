'use client';

import { Suspense } from 'react';
import { Sky, Html } from '@react-three/drei';
import GardenGround from './GardenGround';
import GardenPlants from './GardenPlants';
import CloudComponent from './CloudComponent';
import CameraController from './CameraController';
import ClickHandler from './ClickHandler';
import ObjectPopup from './ObjectPopup';
import NavigationControls from './NavigationControl'; // New import

const ForestScene = ({ setSelectedInfo, selectedInfo }) => {
  return (
    <>
      <Sky sunPosition={[100, 10, 100]} turbidity={10} rayleigh={0.5} />
      <CloudComponent />

      <ambientLight intensity={0.6} />
      <directionalLight
        position={[50, 100, 50]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Suspense fallback={null}>
        <GardenGround />
        <GardenPlants />
      </Suspense>

      <CameraController />
      <ClickHandler setSelectedInfo={setSelectedInfo} />

      {selectedInfo && (
        <ObjectPopup
          name={selectedInfo.name}
          position={selectedInfo.position}
          family={selectedInfo.family}
          scientificName={selectedInfo.scientificName}
          collector={selectedInfo.collector}
          country={selectedInfo.country}
          uses={selectedInfo.uses}
          imageUrl={selectedInfo.imageUrl}
          onClose={() => setSelectedInfo(null)}
        />
      )}

      <Html>
        <NavigationControls />
      </Html>
    </>
  );
};

export default ForestScene;
