import * as THREE from 'three';

export function createRoom() {
  const room = new THREE.Group();

  const textureLoader = new THREE.TextureLoader();

  const brickTexture = textureLoader.load('textures/bricks.jpg');
  brickTexture.wrapS = brickTexture.wrapT = THREE.RepeatWrapping;
  brickTexture.repeat.set(4, 2);

  const tileTexture = textureLoader.load('textures/tile.jpg');
  tileTexture.wrapS = tileTexture.wrapT = THREE.RepeatWrapping;
  tileTexture.repeat.set(6, 6);

  const graniteTexture = textureLoader.load('textures/granite.jpg');
  graniteTexture.wrapS = graniteTexture.wrapT = THREE.RepeatWrapping;
  graniteTexture.repeat.set(4, 4);

  const brickMaterial = new THREE.MeshStandardMaterial({ map: brickTexture, roughness: 0.9 });
  const tileMaterial = new THREE.MeshStandardMaterial({ map: tileTexture, roughness: 0.4, metalness: 0.1 });
  const floorMaterial = new THREE.MeshStandardMaterial({ map: graniteTexture, roughness: 0.35, metalness: 0.15 });
  const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.9 });
  const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.6 });
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.15,
    roughness: 0.05,
    metalness: 0.0,
    transmission: 0.9
  });

  const floor = new THREE.Mesh(new THREE.BoxGeometry(12, 0.2, 12), floorMaterial);
  floor.position.y = -0.1;
  floor.receiveShadow = true;
  room.add(floor);

  const ceiling = new THREE.Mesh(new THREE.BoxGeometry(12, 0.2, 12), ceilingMaterial);
  ceiling.position.y = 3.2;
  room.add(ceiling);

  const backWall = new THREE.Mesh(new THREE.BoxGeometry(12, 3, 0.2), tileMaterial);
  backWall.position.set(0, 1.5, -6);
  backWall.receiveShadow = true;
  room.add(backWall);

  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 12), brickMaterial);
  leftWall.position.set(-6, 1.5, 0);
  leftWall.receiveShadow = true;
  room.add(leftWall);

  const rightWallTop = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.6, 12), tileMaterial);
  rightWallTop.position.set(6, 2.7, 0);
  rightWallTop.receiveShadow = true;
  room.add(rightWallTop);

  const rightWallBottom = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 12), tileMaterial);
  rightWallBottom.position.set(6, 0.4, 0);
  rightWallBottom.receiveShadow = true;
  room.add(rightWallBottom);

  const rightWallFront = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.6, 2), tileMaterial);
  rightWallFront.position.set(6, 1.6, 5);
  rightWallFront.receiveShadow = true;
  room.add(rightWallFront);

  const rightWallBack = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.6, 2), tileMaterial);
  rightWallBack.position.set(6, 1.6, -5);
  rightWallBack.receiveShadow = true;
  room.add(rightWallBack);

  const windowGlass = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.6, 8), glassMaterial);
  windowGlass.position.set(6, 1.6, 0);
  room.add(windowGlass);

  const frameV1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.7, 0.1), frameMaterial);
  frameV1.position.set(6, 1.6, 0);
  room.add(frameV1);

  const frameV2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.7, 0.1), frameMaterial);
  frameV2.position.set(6, 1.6, -2.7);
  room.add(frameV2);

  const frameV3 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.7, 0.1), frameMaterial);
  frameV3.position.set(6, 1.6, 2.7);
  room.add(frameV3);

  const frameTop = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 8.1), frameMaterial);
  frameTop.position.set(6, 2.4, 0);
  room.add(frameTop);

  const frameBottom = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 8.1), frameMaterial);
  frameBottom.position.set(6, 0.8, 0);
  room.add(frameBottom);

  return room;
}