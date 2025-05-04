import PlantCube from './PlantCube';

const GardenPlants = () => {
  const plants = [];
  const gridSize = 32;
  const spacing = 15;
  const startOffset = -(gridSize * spacing) / 2;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (
        (i === gridSize / 2 || j === gridSize / 2) &&
        !(i === gridSize / 2 && j === gridSize / 2)
      ) {
        continue;
      }

      const x = startOffset + i * spacing;
      const z = startOffset + j * spacing;
      const plantType = Math.floor(Math.random() * 5);
      const plantIndex = i * gridSize + j;

      plants.push(
        <PlantCube
          key={plantIndex}
          position={[x, 1, z]}
          plantType={plantType}
          name={`Plant_${plantIndex}`}
          index={plantIndex}
        />
      );
    }
  }

  return <group>{plants}</group>;
};

export default GardenPlants;
