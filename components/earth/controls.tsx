import * as THREE from "three";
import { createMultiMaterialObject } from "three/examples/jsm/utils/SceneUtils";

function generateSprite() {
  var canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;

  var context = canvas.getContext("2d");
  if (context) {
    var gradient = context.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.2, "rgba(0,255,255,1)");
    gradient.addColorStop(0.4, "rgba(0,0,64,1)");
    gradient.addColorStop(1, "rgba(0,0,0,1)");

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createParticleSystem(
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

function createMesh(geom: THREE.BufferGeometry) {
  var meshMaterial = new THREE.MeshNormalMaterial({});
  meshMaterial.side = THREE.DoubleSide;
  var mesh = createMultiMaterialObject(geom, [meshMaterial]);
  return mesh;
}

export class Controls {
  public radius = 40;
  public tube = 28.2;
  public radialSegments = 600;
  public tubularSegments = 12;
  public p = 5;
  public q = 4;
  public asParticles = true;
  public rotate = true;
  public color = "#ffffff";
  public size = 3;

  private _scene: THREE.Scene | null = null;
  private _knot: THREE.Points | THREE.Group | null = null;

  constructor(scene: THREE.Scene) {
    this._scene = scene;
  }

  get knot() {
    return this._knot;
  }

  redraw = () => {
    // remove the old plane
    if (this._knot) this._scene?.remove(this._knot);
    // create a new one
    var geom = new THREE.TorusKnotGeometry(
      this.radius,
      this.tube,
      Math.round(this.radialSegments),
      Math.round(this.tubularSegments),
      Math.round(this.p),
      Math.round(this.q)
    );
    // geom.scale(0.5, 0.5, 0.5);

    if (this.asParticles) {
      this._knot = createParticleSystem(geom, this.color, this.size);
    } else {
      this._knot = createMesh(geom);
    }

    // add it to the scene.
    this._scene?.add(this._knot);
  };
}
