import dynamic from "next/dynamic";
import React from "react";
import { SceneScrollProps } from "./sceneScroll";

const SceneDynamic = dynamic(() => import("./sceneScroll"), { ssr: false });

export const SceneScrollNext: React.FC<SceneScrollProps> = (props) => (
  <SceneDynamic {...props} />
);
