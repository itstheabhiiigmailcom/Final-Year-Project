const GardenGround = () => {
  const groundSize = 600;

  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <planeGeometry args={[groundSize, groundSize]} />
        <meshStandardMaterial color="#3a5f0b" roughness={1} />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.05, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, groundSize]} />
        <meshStandardMaterial color="#d2b48c" roughness={0.8} />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        position={[0, -0.05, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, groundSize]} />
        <meshStandardMaterial color="#d2b48c" roughness={0.8} />
      </mesh>

      <mesh position={[groundSize / 2 - 5, 1, 0]} castShadow>
        <boxGeometry args={[10, 2, groundSize]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>

      <mesh position={[-groundSize / 2 + 5, 1, 0]} castShadow>
        <boxGeometry args={[10, 2, groundSize]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>

      <mesh position={[0, 1, groundSize / 2 - 5]} castShadow>
        <boxGeometry args={[groundSize, 2, 10]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>

      <mesh position={[0, 1, -groundSize / 2 + 5]} castShadow>
        <boxGeometry args={[groundSize, 2, 10]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>
    </group>
  );
};

export default GardenGround;
