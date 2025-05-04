import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Ensure THREE is imported

const DummyCharacter = ({ position, movement }) => {
  const groupRef = useRef();
  const targetPosition = useRef(new THREE.Vector3(...position));
  const moveSpeed = 0.15;

  useFrame(() => {
    if (!groupRef.current) return;

    // Smooth movement towards target position
    groupRef.current.position.lerp(targetPosition.current, moveSpeed);

    // Rotate character to face movement direction
    if (movement.direction.length() > 0) {
      const angle = Math.atan2(movement.direction.x, movement.direction.z);
      groupRef.current.rotation.y = angle;
    }
  });

  useEffect(() => {
    if (movement.direction.length() > 0) {
      const moveVector = movement.direction
        .clone()
        .multiplyScalar(moveSpeed * 5);
      targetPosition.current.add(moveVector);
    }
  }, [movement]);

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#f5c9a1" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.2]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>

      {/* Arms */}
      <group position={[0, 1.4, 0]}>
        <mesh position={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#f5c9a1" />
        </mesh>
        <mesh position={[-0.3, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#f5c9a1" />
        </mesh>
      </group>

      {/* Legs */}
      <group position={[0, 0.7, 0]}>
        <mesh position={[0.1, -0.5, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.8, 8]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
        <mesh position={[-0.1, -0.5, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.8, 8]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
      </group>
    </group>
  );
};

export default DummyCharacter;
