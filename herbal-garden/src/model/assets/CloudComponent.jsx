const CloudComponent = () => {
  const cloudCount = 20;
  const clouds = [];

  for (let i = 0; i < cloudCount; i++) {
    const scale = 1 + Math.random() * 3;
    const posX = (Math.random() - 0.5) * 500;
    const posY = 50 + Math.random() * 50;
    const posZ = (Math.random() - 0.5) * 500;

    clouds.push(
      <mesh
        key={i}
        position={[posX, posY, posZ]}
        scale={[scale, scale * 0.6, scale]}
      >
        <sphereGeometry args={[10, 8, 8]} />
        <meshStandardMaterial color="white" transparent opacity={0.8} />
      </mesh>
    );
  }

  return <group>{clouds}</group>;
};

export default CloudComponent;
