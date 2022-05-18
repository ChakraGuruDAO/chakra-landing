import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useScrollParams } from "hooks/useScrollParams";
import { Box } from "@chakra-ui/react";

const SceneDynamic = dynamic(() => import("./scene"), { ssr: false });

export const Earth = () => {
  const [minRadius, maxRadius] = [14, 300];
  const [minTube, maxTube] = [200, 800];
  const [minSize, maxSize] = [4, 20];
  const [minRadialSegments, maxRadialSegments] = [600, 6000];
  const [minCameraX, maxCameraX] = [-600, -500];
  const [minP, maxP] = [1, 1];

  const bodyRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(minRadius);
  const [tube, setTube] = useState(minTube);
  const [size, setSize] = useState(minSize);
  const [radialSegments, setRadialSegments] = useState(minRadialSegments);
  const [cameraX, setCameraX] = useState(minCameraX);
  const [p, setP] = useState(minP);

  const onUpdateScroll = useCallback(
    (percent: number) => {
      percent = percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

      setRadius(minRadius + (maxRadius - minRadius) * percent);
      setTube(minTube + (maxTube - minTube) * percent);
      setSize(minSize + (maxSize - minSize) * percent);
      setRadialSegments(
        minRadialSegments + (maxRadialSegments - minRadialSegments) * percent
      );
      setCameraX(minCameraX + (maxCameraX - minCameraX) * percent);
      setP(minP + (maxP - minP) * percent);
    },
    [
      minRadius,
      maxRadius,
      minTube,
      maxTube,
      minSize,
      maxSize,
      minRadialSegments,
      maxRadialSegments,
      minCameraX,
      maxCameraX,
      minP,
      maxP,
    ]
  );

  useEffect(() => {
    window.onscroll = (e) => {
      const currentScrollY =
        window.scrollY > (bodyRef.current?.scrollHeight || 1)
          ? bodyRef.current?.scrollHeight
          : window.scrollY;
      const percent =
        (currentScrollY || 0) / (bodyRef.current?.scrollHeight || 1);
      onUpdateScroll(percent);
    };
  }, [onUpdateScroll]);

  return (
    <Box ref={bodyRef}>
      <SceneDynamic
        color="#ffffff"
        rotate={true}
        radius={radius}
        tube={tube}
        size={size}
        radialSegments={radialSegments}
        tubularSegments={12}
        p={p}
        q={4}
        asParticles={true}
        cameraX={Number(cameraX.toFixed(0))}
        cameraY={0}
        cameraZ={0}
      />
    </Box>
  );
};
