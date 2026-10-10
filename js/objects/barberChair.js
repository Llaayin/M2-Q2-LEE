import * as THREE from 'three';

export function createBarberChair() {
  const chair = new THREE.Group();

  const leather = new THREE.MeshStandardMaterial({ color: 0x2b2b2e, roughness: 0.6 });
  const chrome = new THREE.MeshPhysicalMaterial({
    color: 0xdddddd,
    metalness: 1.0,
    roughness: 0.15,
    clearcoat: 1.0
  });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 0.08, 24), chrome);
  base.position.y = 0.04;
  base.castShadow = true;
  chair.add(base);

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.35, 16), chrome);
  pole.position.y = 0.25;
  chair.add(pole);

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.12, 0.7), leather);
  seat.position.y = 0.5;
  seat.castShadow = true;
  chair.add(seat);

  const back = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.9, 0.12), leather);
  back.position.set(0, 1.0, -0.3);
  back.castShadow = true;
  chair.add(back);

  const headrest = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.18, 0.14), leather);
  headrest.position.set(0, 1.55, -0.3);
  chair.add(headrest);

  const armLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.55), chrome);
  armLeft.position.set(-0.38, 0.75, 0);
  chair.add(armLeft);

  const armRight = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.55), chrome);
  armRight.position.set(0.38, 0.75, 0);
  chair.add(armRight);

  return chair;
}