import * as THREE from 'three';

export function createStool() {
  const stool = new THREE.Group();

  const chrome = new THREE.MeshPhysicalMaterial({
    color: 0xdddddd,
    metalness: 1.0,
    roughness: 0.15,
    clearcoat: 1.0
  });

  const seatMat = new THREE.MeshStandardMaterial({ color: 0x2b2b2e, roughness: 0.6 });

  const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.06, 24), seatMat);
  seat.position.y = 0.65;
  seat.castShadow = true;
  stool.add(seat);

  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.65, 12), chrome);
  leg.position.y = 0.32;
  stool.add(leg);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.04, 20), chrome);
  base.position.y = 0.02;
  stool.add(base);

  return stool;
}