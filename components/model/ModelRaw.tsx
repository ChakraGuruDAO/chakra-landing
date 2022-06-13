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
  return (
    <model-viewer
      src={srcGLTF}
      ios-src={srcUSDZ}
      thumbnail={srcPoster}
      enable-pan
      alt={alt}
      ar
      ar-modes="scene-viewer webxr quick-look"
      camera-controls
      environment-image="neutral"
      shadow-intensity="1"
      autoplay
      style={{
        width: "100%",
      }}
    >
      {children}
    </model-viewer>
  );
};

export default ModelRaw;
