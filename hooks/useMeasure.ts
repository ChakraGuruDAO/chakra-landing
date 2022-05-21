import { useEffect, useRef, useState } from "react";

export const useMeasure = <Elem extends Element = Element>() => {
  const ro = useRef<ResizeObserver>(null);
  const elementRef = useRef<Elem>(null);
  const [rect, setRect] = useState<DOMRectReadOnly | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!ro.current && element) {
      const observer: ResizeObserver | null = ro.current;
      // @ts-ignore
      observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const cr = entry.contentRect;
          setRect(cr);
        }
      });
      observer?.observe(element);

      return () => {
        if (element) {
          observer?.unobserve(element);
        }
      };
    }
  }, [ro, elementRef]);

  return {
    elementRef,
    ...rect,
  };
};
