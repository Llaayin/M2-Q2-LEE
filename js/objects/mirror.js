import * as THREE from 'three';

export function createMirror() {
  const mirror = new THREE.Group();

  const frameMat = new THREE.MeshStandardMaterial({ color: 0x0e0e10, roughness: 0.4, metalness: 0.6 });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xb8c4cc,
    metalness: 0.9,
    roughness: 0.05,
    envMapIntensity: 2.0,
    emissive: 0x445566,
    emissiveIntensity: 0.35
  });

  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.3, 1.0), frameMat);
  frame.castShadow = true;
  mirror.add(frame);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.15, 0.85), glassMat);
  glass.position.set(0.055, 0, 0);
  mirror.add(glass);

  return mirror;
}