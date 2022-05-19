import * as THREE from "three";
import { createMesh } from "./createMesh";
import { createParticleSystem } from "./createParticleSystem";

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
    if (this._knot) this._scene?.remove(this._knot);

    const geom = new THREE.TorusKnotGeometry(
      this.radius,
      this.tube,
      Math.round(this.radialSegments),
      Math.round(this.tubularSegments),
      Math.round(this.p),
      Math.round(this.q)
    );

    if (this.asParticles) {
      this._knot = createParticleSystem(geom, this.color, this.size);
    } else {
      this._knot = createMesh(geom);
    }

    // add it to the scene.
    this._scene?.add(this._knot);
  };
}
