import * as THREE from "three";

interface ThreeProps {
  canvasContainer: HTMLDivElement;
  sceneSizes: { width: number; height: number };
  bgColor: string;
}

export class Three {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  bgColor: string;
  sceneSizes: ThreeProps["sceneSizes"];
  camera: THREE.Camera;
  step: number = 0;
  knot: any;

  constructor({ canvasContainer, sceneSizes, bgColor }: ThreeProps) {
    // Для использования внутри класса добавляем параметры к this
    this.sceneSizes = sceneSizes;
    this.bgColor = bgColor;

    // Создаём редерер (по умолчанию будет использован WebGL2)
    // antialias отвечает за сглаживание объектов
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(new THREE.Color(0x000000), 1.0);
    this.renderer.shadowMap.enabled = true;

    //Задаём размеры рендерера
    this.renderer.setSize(this.sceneSizes.width, this.sceneSizes.height);

    //Добавляем рендерер в узел-контейнер, который мы прокинули извне
    canvasContainer.appendChild(this.renderer.domElement);
    // Создаём объект сцены
    this.scene = new THREE.Scene();

    // Задаём цвет фона
    this.scene.background = new THREE.Color(bgColor);
    // Создаём ортографическую камеру (Идеально подходит для 2d)

    this.camera = new THREE.PerspectiveCamera(
      45,
      this.sceneSizes.width / this.sceneSizes.height,
      0.1,
      1000
    );

    // Позиционируем камеру в пространстве
    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 50;
    this.camera.lookAt(new THREE.Vector3(10, 0, 0));
    this.render(); // Запускаем рендеринг
  }

  generateSprite() {
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

  createParticleSystem(geom: any) {
    var material = new THREE.ParticleBasicMaterial({
      color: 0xffffff,
      size: 3,
      transparent: true,
      blending: THREE.AdditiveBlending,
      map: this.generateSprite(),
    });

    var system = new THREE.ParticleSystem(geom, material);
    // @ts-ignore
    system.sortParticles = true;
    return system;
  }

  createMesh(geom: any) {
    // assign two materials
    var meshMaterial = new THREE.MeshNormalMaterial({});
    meshMaterial.side = THREE.DoubleSide;

    // create a multimaterial
    var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    return mesh;
  }

  renderEarth() {}

  render = () => {
    requestAnimationFrame(this.render);
    // Выполняем рендеринг сцены (нужно запускать для отображения изменений)
    this.renderer.render(this.scene, this.camera);
  };
}
