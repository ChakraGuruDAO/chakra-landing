import { useCallback, useEffect, useState } from "react";

export function useScrollParams(
  range: [number, number],
  offsetTop: number,
  maxScroll: number
) {
  const [min, max] = range;
  const [value, setValue] = useState(min);

  const handleScroll = useCallback(
    function (this: Window) {
      const target = this;
      if (target.scrollY >= offsetTop && target.screenY <= maxScroll) {
        if (target.scrollY <= min) setValue(min);
        else if (target.scrollY >= max) setValue(max);
        else setValue(target.scrollY);
      }
    },
    [min, max, offsetTop, maxScroll]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return {
    value,
  };
}
