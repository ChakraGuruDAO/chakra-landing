import { Box } from "@chakra-ui/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useLayoutEffect,
} from "react";
import { useWindowSize } from "react-use";
import * as THREE from "three";

import { Controls } from "./controls";

export interface SceneProps {
  height?: number;
  width?: number;

  backgroundColor?: string;
  color?: string;
  size?: number;
  radius?: number;
  tube?: number;
  radialSegments?: number;
  tubularSegments?: number;
  p?: number;
  q?: number;
  asParticles?: boolean;
  rotate?: boolean;

  cameraX?: number;
  cameraY?: number;
  cameraZ?: number;
}

export default function Scene({
  height = 100,
  width = 100,
  backgroundColor = "#000000",
  color = "#ffffff",
  rotate = true,
  size = 3,
  radius = 40,
  tube = 28.2,
  radialSegments = 600,
  tubularSegments = 12,
  p = 5,
  q = 4,
  asParticles = true,
  cameraX = -30,
  cameraY = 40,
  cameraZ = 50,
}: SceneProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  // const { width, height } = useWindowSize(
  //   window.innerWidth,
  //   window.innerHeight
  // );
  const _camera = useMemo(
    () => new THREE.PerspectiveCamera(45, width / height, 0.1, 1000),
    [width, height]
  );
  const _scene = useMemo<THREE.Scene>(() => new THREE.Scene(), []);
  const _webGLRenderer = useMemo(() => new THREE.WebGLRenderer(), []);
  const _controls = useMemo(() => new Controls(_scene), [_scene]);

  useLayoutEffect(() => {
    _camera.position.x = cameraX;
    _camera.position.y = cameraY;
    _camera.position.z = cameraZ;
    _camera.lookAt(new THREE.Vector3(10, 0, 0));
  }, [_camera, cameraX, cameraY, cameraZ]);

  useLayoutEffect(() => {
    _webGLRenderer.setClearColor(new THREE.Color(backgroundColor), 1.0);
    _webGLRenderer.setSize(width, height);
    _webGLRenderer.shadowMap.enabled = true;
  }, [_webGLRenderer, backgroundColor, width, height]);

  useLayoutEffect(() => {
    _controls.rotate = rotate;
    _controls.color = color;
    _controls.size = size;
    _controls.radius = radius;
    _controls.tube = tube;
    _controls.radialSegments = radialSegments;
    _controls.tubularSegments = tubularSegments;
    _controls.p = p;
    _controls.q = q;
    _controls.asParticles = asParticles;
    _controls.redraw();
  }, [
    _controls,
    rotate,
    color,
    size,
    radius,
    tube,
    radialSegments,
    tubularSegments,
    p,
    q,
    asParticles,
  ]);

  const render = useCallback(() => {
    if (_controls.rotate) {
      _controls.knot.rotation.y = _controls.knot.rotation.y + 0.002;
    }

    requestAnimationFrame(render);
    _webGLRenderer.render(_scene, _camera);
  }, [_controls, _camera, _scene, _webGLRenderer]);

  useLayoutEffect(() => {
    if (canvasRef.current) {
      canvasRef.current?.append(_webGLRenderer.domElement);
      _controls.redraw();
      render();
    }
  }, [_webGLRenderer, _controls, render]);

  return <div ref={canvasRef}></div>;
}
