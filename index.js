import { useCallback, useEffect, useState } from "react";

/**
 *
 * @param {any} element could be ref or current
 * @param {boolean} onlyOnce if only can happen once
 * @param {number} dividend number to divide the screen. Default 1
 * @returns
 */
const useInScreen = (element, onlyOnce = false, dividend = 1) => {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(
    (e) => {
      let rect = undefined;
      if (element !== null) {
        if (element && element.current)
          rect = element.current.getBoundingClientRect();
        else rect = element.getBoundingClientRect();
      }
      if (rect) setVisible(rect.top <= window.innerHeight / dividend);
    },
    [setVisible, element, onlyOnce, dividend]
  );

  useEffect(() => {
    if (!onlyOnce || (onlyOnce && !visible)) {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    } else window.removeEventListener("scroll", onScroll);
  }, [onScroll, onlyOnce, visible]);

  return visible;
};

export default useInScreen;
