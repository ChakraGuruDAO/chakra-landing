import { useEffect, useRef } from "react";
import { Three } from "./three";

export const Earth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const threeRef = useRef<Three>(null);

  useEffect(() => {
    if (!threeRef.current && ref.current) {
      // @ts-ignore
      threeRef.current = new Three({
        bgColor: "rgba(0,0,0,0.3)",
        sceneSizes: { width: 500, height: 500 },
        canvasContainer: ref.current,
      });
    }
  }, []);

  useEffect(() => {
    if (threeRef.current) {
      threeRef.current.render();
    }
  }, [threeRef]);

  return <div ref={ref}></div>;
};
