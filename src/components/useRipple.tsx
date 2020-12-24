import React, { useState, useCallback, forwardRef } from "react";
import styled, { css } from "styled-components";

interface StyledRippleProps {
  isDisplay: boolean;
  top: number;
  left: number;
  size: number;
  styles: Styles;
}

interface RippleProps {
  styles?: Styles;
}

interface Styles {
  color?: string;
  opacity?: number;
}

const StyledRipple = styled.span<StyledRippleProps>`
  display: none;
  ${({ isDisplay }) =>
    isDisplay &&
    css`
      display: block;
    `}
  position: absolute;
  border-radius: 50%;
  transform: scale(0.4);
  animation: ripple 600ms linear;
  background-color: ${({ styles }) => styles.color};
  opacity: ${({ styles }) => styles.opacity};
  pointer-events: none;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const useRipple = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [rippleProps, setRippleProps] = useState({
    top: 0,
    left: 0,
    size: 0,
  });

  const pulsate = useCallback(
    (e: React.MouseEvent) => {
      const radius = rippleProps.size / 2;
      setPosition({
        top: e.clientY - (rippleProps.top + radius),
        left: e.clientX - (rippleProps.left + radius),
      });
      setIsDisplay(true);
    },
    [rippleProps]
  );

  const Ripple = forwardRef<HTMLSpanElement, RippleProps>(
    ({ styles = { color: "#fff", opacity: 0.5 } }, ref) => (
      <StyledRipple
        ref={ref}
        isDisplay={isDisplay}
        size={rippleProps.size}
        top={position.top}
        left={position.left}
        onAnimationEnd={() => setIsDisplay(false)}
        styles={styles}
      />
    )
  );

  return { setRippleProps, pulsate, Ripple };
};

export default useRipple;
