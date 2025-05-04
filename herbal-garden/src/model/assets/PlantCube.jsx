const PlantCube = ({ position, plantType, name, index }) => {
  const plantTypes = [
    { color: '#2d8e39', height: 1.5, width: 0.8 },
    { color: '#3cb043', height: 0.8, width: 1.2 },
    { color: '#98bf64', height: 0.5, width: 0.5 },
    { color: '#4f7942', height: 1.2, width: 0.6 },
    { color: '#29ab87', height: 0.7, width: 0.7 },
  ];

  const plant = plantTypes[plantType % plantTypes.length];

  return (
    <group position={position} name={`Plant_${index}`}>
      <mesh userData={{ clickable: true }} name={name || `Cube_${index}`}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial
          transparent={true}
          opacity={0.2}
          roughness={0}
          transmission={0.9}
          reflectivity={0.5}
        />
      </mesh>

      <group position={[0, -0.5, 0]}>
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, plant.height, 8]} />
          <meshStandardMaterial color="#3a5f0b" />
        </mesh>

        <mesh position={[0, plant.height / 2, 0]}>
          <coneGeometry args={[plant.width, plant.height, 8]} />
          <meshStandardMaterial color={plant.color} />
        </mesh>
      </group>
    </group>
  );
};

export default PlantCube;
