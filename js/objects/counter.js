import * as THREE from 'three';

export function createCounter() {
  const counter = new THREE.Group();

  const textureLoader = new THREE.TextureLoader();
  const graniteTexture = textureLoader.load('textures/granite.jpg');
  graniteTexture.wrapS = graniteTexture.wrapT = THREE.RepeatWrapping;
  graniteTexture.repeat.set(2, 1);

  const graniteMat = new THREE.MeshStandardMaterial({ map: graniteTexture, roughness: 0.3, metalness: 0.15 });
  const cabinetMat = new THREE.MeshStandardMaterial({ color: 0x18181a, roughness: 0.7 });

  const cabinet = new THREE.Mesh(new THREE.BoxGeometry(3, 0.85, 0.7), cabinetMat);
  cabinet.position.y = 0.425;
  cabinet.castShadow = true;
  cabinet.receiveShadow = true;
  counter.add(cabinet);

  const top = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.08, 0.85), graniteMat);
  top.position.y = 0.89;
  top.castShadow = true;
  top.receiveShadow = true;
  counter.add(top);

  return counter;
}