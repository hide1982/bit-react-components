import React, { useState, useCallback, useEffect } from "react";

const useRipple = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [size, setSize] = useState(0);

  const [rippleParentInfo, setRippleParentInfo] = useState({
    offsetTop: 0,
    offsetLeft: 0,
    clientWidth: 0,
    clientHeight: 0,
  });

  useEffect(() => {
    setSize(
      Math.max(rippleParentInfo.clientHeight, rippleParentInfo.clientWidth)
    );
  }, [rippleParentInfo]);

  const pulsate = useCallback(
    (e: React.MouseEvent) => {
      const radius = size / 2;
      setPosition({
        top: e.clientY - (rippleParentInfo.offsetTop + radius),
        left: e.clientX - (rippleParentInfo.offsetLeft + radius),
      });
      setIsDisplay(true);
    },
    [rippleParentInfo, size]
  );

  const rippleProps = {
    isDisplay,
    top: position.top,
    left: position.left,
    size,
    onAnimationEnd: () => setIsDisplay(false),
  };

  return {
    setRippleParentInfo,
    rippleProps,
    pulsate,
  };
};

export default useRipple;
