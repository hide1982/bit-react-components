import React, { forwardRef, MouseEventHandler, useEffect, useRef } from "react";
import styled from "styled-components";

import useForkRef from "../utils/useForkRef";
import useRipple from "./useRipple";

export type RippleColor = string | [string, string?];

export interface StyleProps {
  rippleColors?: RippleColor;
  rippleRadius?: string;
  rippleDuration?: string;
}

const StyledButton = styled.button<StyleProps>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
`;

export interface BaseProps {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonBaseProps = BaseProps & StyleProps;

const BaseButton = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const {
      rippleColors,
      rippleRadius,
      rippleDuration,
      children,
      onClick,
      ...rest
    } = props;
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
    }, [baseButtonRef, setRippleProps]);

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (onClick) onClick(e);
      pulsate(e);
    };

    return (
      <StyledButton ref={handleRef} onClick={handleClick} {...rest}>
        {children}
        <Ripple
          styles={{
            colors: rippleColors,
            radius: rippleRadius,
            duration: rippleDuration,
          }}
        />
      </StyledButton>
    );
  }
);

export default BaseButton;
