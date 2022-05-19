import { Box, HTMLChakraProps } from "@chakra-ui/react";
import { useEffect, useMemo, useRef } from "react";

const uid = "a3c357d308004c6abed1abe2e0cf62b0";

interface BoysProps extends HTMLChakraProps<"iframe"> {}

export const Boys: React.FC<BoysProps> = ({ ...props }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      var client = new Sketchfab(iframeRef.current);

      // Alternatively, you can request a specific version.
      // var client = new Sketchfab( '1.12.0', iframe );

      client.init(uid, {
        ui_animations: false,
        ui_infos: false,
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
        camera: 0,
        dnt: 1,
        autoplay: 1,
        autospin: 0.5,
        success: function onSuccess(api: any) {
          api.start();
          api.addEventListener("viewerready", function () {
            // API is ready to use
            // Insert your code here
            console.log("Viewer is ready", api);
          });
        },
        error: function onError() {
          console.log("Viewer error");
        },
      });
    }
  }, [iframeRef]);

  return (
    <Box
      as="iframe"
      ref={iframeRef}
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking=""
      execution-while-out-of-viewport=""
      execution-while-not-rendered=""
      web-share=""
      allowFullScreen
      width="100%"
      height="500px"
      {...props}
    />
  );
};
