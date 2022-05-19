import { Box } from "@chakra-ui/react";
import useComponentSize from "@rehooks/component-size";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { SceneNext } from "./sceneNext";

export interface SceneScrollProps {
  backgroundColor?: string;
  radius?: [number, number];
  tube?: [number, number];
  size?: [number, number];
  radialSegments?: [number, number];
  cameraX?: [number, number];
  p?: [number, number];
}

export function SceneScroll({
  backgroundColor,
  radius: [minRadius, maxRadius] = [14, 300],
  tube: [minTube, maxTube] = [200, 800],
  size: [minSize, maxSize] = [4, 20],
  radialSegments: [minRadialSegments, maxRadialSegments] = [600, 6000],
  cameraX: [minCameraX, maxCameraX] = [-600, -500],
  p: [minP, maxP] = [1, 1],
}: SceneScrollProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { width, height } = useComponentSize(bodyRef);
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

  // console.log(width, height);

  return (
    <Box ref={bodyRef} width="full" height="full">
      <SceneNext
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        color="#fff"
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
}
