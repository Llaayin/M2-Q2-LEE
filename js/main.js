import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createRoom } from './setup/room.js';
import { setupLights } from './setup/lights.js';
import { createBarberChair } from './objects/barberChair.js';
import { createMirror } from './objects/mirror.js';
import { createCounter } from './objects/counter.js';
import { createPendantLamp } from './objects/pendantLamp.js';
import { createStool } from './objects/stool.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0e0e10);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(5, 3.5, 7);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-1.5, 1, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI / 2.05;
controls.minDistance = 3;
controls.maxDistance = 18;

scene.add(createRoom());
setupLights(scene);

const stationZ = [-3.5, 0, 3.5];

stationZ.forEach((z) => {
  const mirror = createMirror();
  mirror.position.set(-5.7, 1.6, z);
  scene.add(mirror);

  const chair = createBarberChair();
  chair.position.set(-4.4, 0, z);
  chair.rotation.y = -Math.PI / 2;
  scene.add(chair);

  const lamp = createPendantLamp();
  lamp.position.set(-4.4, 3.0, z);
  scene.add(lamp);
});

const counter = createCounter();
counter.position.set(4.5, 0, 0);
counter.rotation.y = Math.PI / 2;
scene.add(counter);

const counterStool = createStool();
counterStool.position.set(5.5, 0, -0.5);
scene.add(counterStool);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});