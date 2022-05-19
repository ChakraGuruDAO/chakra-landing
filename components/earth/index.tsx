import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useScrollParams } from "hooks/useScrollParams";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { toPx } from "utils";

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
  const [height, setHeight] = useState(1536);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) {
      setHeight(body.clientHeight);
    }
  }, [bodyRef]);

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

  const handleScroll = useCallback(
    function (this: Window) {
      const target = this;
      const container = bodyRef.current;
      const scrollY = target.scrollY;

      if (container) {
        const currentScrollY =
          scrollY > (bodyRef.current?.scrollHeight || 1)
            ? bodyRef.current?.scrollHeight
            : window.scrollY;
        const percent =
          (currentScrollY || 0) / (bodyRef.current?.scrollHeight || 1);
        // onUpdateScroll(percent);
      }
    },
    [onUpdateScroll, bodyRef]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Box
      ref={bodyRef}
      position="absolute"
      bottom="0"
      height={{ xl: "100%", md: "100%" }}
      paddingTop={{ xl: "200px", md: "200px", base: "300px" }}
    >
      <SceneDynamic
        height={height}
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
        cameraX={cameraX}
        cameraY={0}
        cameraZ={0}
      />
    </Box>
  );
};
