import dynamic from "next/dynamic";
import React from "react";
import { SceneProps } from "./scene";

const SceneDynamic = dynamic(() => import("./scene"), { ssr: false });

export const SceneNext: React.FC<SceneProps> = (props) => (
  <SceneDynamic {...props} />
);
