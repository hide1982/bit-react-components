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
  transform: scale(0);
  animation: ripple 1000ms linear;
  opacity: ${({ styles }) => styles.opacity};
  pointer-events: none;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background-color: ${({ styles }) => styles.color};
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${({ size }) => size / 2}px;
  border-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.6);

  @keyframes ripple {
    to {
      transform: scale(4) rotate(45deg);
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
