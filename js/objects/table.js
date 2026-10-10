import * as THREE from 'three';

export function createTable() {
  const table = new THREE.Group();

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x2b2b2e, roughness: 0.5 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.2 });

  const top = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.06, 0.7), woodMat);
  top.position.y = 0.75;
  top.castShadow = true;
  top.receiveShadow = true;
  table.add(top);

  const legPositions = [
    [-0.5, 0.375, -0.25],
    [0.5, 0.375, -0.25],
    [-0.5, 0.375, 0.25],
    [0.5, 0.375, 0.25]
  ];

  legPositions.forEach(([x, y, z]) => {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.75, 10), chrome);
    leg.position.set(x, y, z);
    leg.castShadow = true;
    table.add(leg);
  });

  return table;
}