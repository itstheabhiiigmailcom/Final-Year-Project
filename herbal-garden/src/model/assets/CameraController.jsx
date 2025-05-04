import { useThree, useFrame } from '@react-three/fiber';
import { MapControls } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const CameraController = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  const bounds = {
    minX: -280,
    maxX: 280,
    minZ: -280,
    maxZ: 280,
    minY: 1.5,
    maxY: 10,
  };

  const moveCamera = (direction) => {
    const speed = 5;
    const vector = new THREE.Vector3();

    switch (direction) {
      case 'forward':
        vector.set(0, 0, -1);
        break;
      case 'backward':
        vector.set(0, 0, 1);
        break;
      case 'left':
        vector.set(-1, 0, 0);
        break;
      case 'right':
        vector.set(1, 0, 0);
        break;
      default:
        return;
    }

    vector.applyQuaternion(camera.quaternion);
    vector.y = 0;
    vector.normalize().multiplyScalar(speed);
    camera.position.add(vector);
  };

  useEffect(() => {
    camera.position.set(0, 2, 20);
    camera.lookAt(0, 2, 0);

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'w':
        case 'ArrowUp':
          moveCamera('forward');
          break;
        case 's':
        case 'ArrowDown':
          moveCamera('backward');
          break;
        case 'a':
        case 'ArrowLeft':
          moveCamera('left');
          break;
        case 'd':
        case 'ArrowRight':
          moveCamera('right');
          break;
      }
    };

    const handleNavigationMove = (e) => {
      moveCamera(e.detail.direction);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('navigation-move', handleNavigationMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('navigation-move', handleNavigationMove);
    };
  }, [camera]);

  useFrame(() => {
    const pos = camera.position;
    pos.x = THREE.MathUtils.clamp(pos.x, bounds.minX, bounds.maxX);
    pos.y = THREE.MathUtils.clamp(pos.y, bounds.minY, bounds.maxY);
    pos.z = THREE.MathUtils.clamp(pos.z, bounds.minZ, bounds.maxZ);
    camera.position.set(pos.x, pos.y, pos.z);
  });

  return (
    <MapControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableRotate={false}
      enableZoom={false}
      enablePan={true}
      panSpeed={2}
      screenSpacePanning={true}
    />
  );
};

export default CameraController;
