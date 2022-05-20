import { Box, HTMLChakraProps, useBoolean } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { useInViewport } from "react-in-viewport";

const uid = "a3c357d308004c6abed1abe2e0cf62b0";

interface BoysProps extends HTMLChakraProps<"iframe"> {
  size: "sm" | "md" | "xl";
}

const _Boys: React.FC<BoysProps> = ({ size, ...props }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const [isLoaded, { on: setIsLoaded }] = useBoolean(false);
  const { inViewport: inViewportScene } = useInViewport(iframeRef);
  const { inViewport: inViewportLoader } = useInViewport(loaderRef);

  const cameraLook = useMemo(() => {
    if (size === "sm")
      return [
        [-43.2062143392083, -9.98690433796497, 59.57756235600162],
        [-1.827321905981053, 4.0772360171909074, 49.40147453375988],
      ];
    else if (size === "md")
      return [
        [-53.23185719553844, 37.556349858925415, 47.02140447510676],
        [-11.292334064433962, 24.051756347178774, 38.52035160418849],
      ];
    else if (size === "xl")
      return [
        [-39.45392522417158, -31.74718468186316, 44.76105606317075],
        [1.924967209055659, -17.683044326706792, 34.58496824092911],
      ];
    return [
      [-39.45392522417158, -31.74718468186316, 44.76105606317075],
      [1.924967209055659, -17.683044326706792, 34.58496824092911],
    ];
  }, [size]);

  const onSceneInitialized = useCallback(
    (api: any) => {
      api.start();
      api.addEventListener("viewerready", function () {
        api.setCameraLookAt(cameraLook[0], cameraLook[1], 1);
      });
      api.addEventListener("camerastop", function () {
        api.getCameraLookAt(function (err, camera) {
          window.console.log("position", camera.position); // [x, y, z]
          window.console.log("target", camera.target); // [x, y, z]
        });
      });
    },
    [cameraLook]
  );

  const sceneLoad = useCallback(() => {
    if (iframeRef.current && !isLoaded) {
      setIsLoaded();

      const client = new Sketchfab(iframeRef.current);

      client.init(uid, {
        transparent: 0,
        ui_animations: 0,
        ui_infos: 0,
        ui_stop: 0,
        ui_inspector: 0,
        ui_watermark_link: 0,
        ui_watermark: 0,
        ui_help: 0,
        ui_settings: 0,
        ui_vr: 0,
        ui_fullscreen: 0,
        ui_annotations: 0,
        ui_theme: "dark",
        scrollwheel: 0,
        camera: 0,
        dnt: 0,
        autoplay: 1,
        autospin: -0.1,
        preload: 1,
        max_texture_size: size === "sm" ? 512 : size === "md" ? 1024 : 2048,
        success: (api) => requestAnimationFrame(() => onSceneInitialized(api)),
      });
    }
  }, [isLoaded, setIsLoaded, onSceneInitialized, size]);

  useLayoutEffect(() => {
    if (inViewportLoader || inViewportScene) {
      requestAnimationFrame(sceneLoad);
    }
  }, [sceneLoad, inViewportLoader, inViewportScene]);

  return (
    <>
      <Box
        ref={loaderRef}
        position="absolute"
        left={0}
        bottom={{
          base: "200vh",
          lg: "150vh",
          xl: "150vh",
        }}
        width={100}
        height={100}
        style={{
          visibility: "hidden",
        }}
      />
      <Box
        as="iframe"
        ref={iframeRef}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        width="100%"
        height="500px"
        style={
          {
            // visibility: "hidden",
          }
        }
        {...props}
      />
    </>
  );
};

export const Boys = dynamic(async () => _Boys, { ssr: false });
