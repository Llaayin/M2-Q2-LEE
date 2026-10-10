import * as THREE from 'three';

export function setupLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xfff2dd, 1.2);
  sun.position.set(14, 6, 2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -10;
  sun.shadow.camera.right = 10;
  sun.shadow.camera.top = 10;
  sun.shadow.camera.bottom = -10;
  scene.add(sun);

  const spot = new THREE.SpotLight(0xffffff, 0.6, 14, Math.PI / 3, 0.6, 1.0);
  spot.position.set(-4.4, 3.1, 0);
  spot.target.position.set(-4.4, 0, 0);
  spot.castShadow = false;
  scene.add(spot);
  scene.add(spot.target);
}