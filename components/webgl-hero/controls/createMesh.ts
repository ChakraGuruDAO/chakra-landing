import * as THREE from "three";
import { createMultiMaterialObject } from "three/examples/jsm/utils/SceneUtils";

export function createMesh(geom: THREE.BufferGeometry) {
  var meshMaterial = new THREE.MeshNormalMaterial({});
  meshMaterial.side = THREE.DoubleSide;
  var mesh = createMultiMaterialObject(geom, [meshMaterial]);
  return mesh;
}
