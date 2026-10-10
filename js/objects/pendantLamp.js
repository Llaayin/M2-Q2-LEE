import * as THREE from 'three';

export function createPendantLamp() {
  const lamp = new THREE.Group();

  const chrome = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.2 });
  const shadeMat = new THREE.MeshStandardMaterial({ color: 0x101012, roughness: 0.5 });

  const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.5, 8), chrome);
  cord.position.y = -0.25;
  lamp.add(cord);

  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.25, 20, 1, true), shadeMat);
  shade.position.y = -0.6;
  shade.castShadow = true;
  lamp.add(shade);

  const bulb = new THREE.PointLight(0xfff4e0, 0.9, 5);
  bulb.position.y = -0.68;
  lamp.add(bulb);

  const bulbVisual = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 12, 12),
    new THREE.MeshStandardMaterial({ color: 0xfff4e0, emissive: 0xfff4e0, emissiveIntensity: 2 })
  );
  bulbVisual.position.y = -0.68;
  lamp.add(bulbVisual);

  return lamp;
}