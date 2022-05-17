declare module "vanta" {}

type SketchfabClass = {
  new (iframe: HTMLIFrameElement): any;
};

declare global {
  interface Window {
    Sketchfab: SketchfabClass;
  }
}

declare var Sketchfab: SketchfabClass;
