import React, { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";

import useForkRef from "../utils/useForkRef";
import useRipple from "./useRipple";

import type { ButtonBaseProps as Props, ButtonBaseStyleProps } from "../types";

const StyledButton = styled.button<ButtonBaseStyleProps>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
`;

const BaseButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { disableFocusStyle, children, onClick, ...rest } = props;
  const { pulsate, setRippleProps, Ripple } = useRipple();

  const baseButtonRef = useRef<HTMLButtonElement>(null);
  const handleRef = useForkRef<HTMLButtonElement>(ref, baseButtonRef);

  useEffect(() => {
    if (baseButtonRef.current) {
      const elem = baseButtonRef.current;
      setRippleProps({
        top: elem.offsetTop,
        left: elem.offsetLeft,
        size: Math.max(elem.clientWidth, elem.clientHeight),
      });
    }
  }, [handleRef, baseButtonRef, setRippleProps]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) onClick(e);
    pulsate(e);
  };

  return (
    <StyledButton
      ref={handleRef}
      disableFocusStyle={disableFocusStyle}
      onClick={handleClick}
      {...rest}
    >
      {children}
      <Ripple />
    </StyledButton>
  );
});

export default BaseButton;
