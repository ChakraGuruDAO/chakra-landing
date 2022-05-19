import * as THREE from "three";
import { createMultiMaterialObject } from "three/examples/jsm/utils/SceneUtils";
import { generateSprite } from "./generateSprite";

export function createParticleSystem(
  geom: THREE.BufferGeometry,
  color: string,
  size: number
) {
  var material = new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    blending: THREE.AdditiveBlending,
    map: generateSprite(),
  });

  var system = new THREE.Points(geom, material);
  // system.sortParticles = true;
  return system;
}
