import "@google/model-viewer";
import React, { PropsWithChildren } from "react";

export interface ModelProps {
  srcGLTF: string;
  srcUSDZ: string;
  srcPoster: string;
  alt?: string;
}

const ModelRaw: React.FC<PropsWithChildren<ModelProps>> = ({
  srcGLTF,
  srcUSDZ,
  srcPoster,
  alt,
  children,
}) => {
  return React.createElement(
    "model-viewer",
    {
      src: srcGLTF,
      "ios-src": srcUSDZ,
      thumbnail: srcPoster,
      "enable-pan": true,
      alt: alt,
      ar: true,
      "ar-modes": "scene-viewer webxr quick-look",
      "camera-controls": true,
      "environment-image": "neutral",
      "shadow-intensity": "1",
      autoplay: true,
      style: {
        width: "100%",
      },
    },
    children
  );
};

export default ModelRaw;
