import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const SceneDynamic = dynamic(() => import("./scene"), { ssr: false });

export const Earth = () => {
  return (
    <SceneDynamic
      backgroundColor={0x06071f}
      color="#ffffff"
      rotate={true}
      radius={14}
      tube={200}
      size={4}
      radialSegments={600}
      tubularSegments={12}
      p={1}
      q={4}
      asParticles={true}
      cameraX={-650}
      cameraY={0}
      cameraZ={0}
    />
  );
};
