import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';

const ClickHandler = ({ setSelectedInfo }) => {
  const { camera, scene, gl } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const { handleCubeClick } = useAuth();

  const handleClick = async (event) => {
    const bounds = gl.domElement.getBoundingClientRect();
    mouse.current.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    mouse.current.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hit.userData.clickable) {
        const cubeName = hit.name || 'UnnamedObject';
        const worldPosition = hit.getWorldPosition(new THREE.Vector3());

        window.dispatchEvent(
          new CustomEvent('cube-clicked', { detail: { cubeName } })
        );

        if (cubeName === 'Object_2') {
          return;
        }

        const { success, plant, message } = await handleCubeClick(cubeName);

        if (success) {
          setSelectedInfo({
            Cube: plant.cubeName,
            position: worldPosition,
            family: plant.family,
            scientificName: plant.scientificName,
            collector: plant.collector,
            country: plant.country,
            uses: plant.uses,
            imageUrl: plant.image,
          });
        } else {
          setSelectedInfo({
            Cube: cubeName,
            position: worldPosition,
            description: message || 'No info found in database.',
            family: '',
            scientificName: '',
            collector: '',
            country: '',
            uses: '',
            imageUrl: '',
          });
        }
      }
    }
  };

  useEffect(() => {
    gl.domElement.addEventListener('click', handleClick);
    return () => gl.domElement.removeEventListener('click', handleClick);
  }, [gl, handleCubeClick]);

  return null;
};

export default ClickHandler;
