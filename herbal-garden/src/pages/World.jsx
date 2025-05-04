// In App.jsx or wherever you want to show it
import React from 'react';
import ForestModelViewer from '../model/ForestModel';

function World() {
  return (
    <div id="Forest" className="w-full h-screen overflow-hidden">
      <ForestModelViewer modelPath="Models/newForest.glb" />
    </div>
  );
}

export default World;
