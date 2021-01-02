import React, { forwardRef } from "react";
import styled from "styled-components";

import Icon from "./Icon";
import ButtonBase from "./ButtonBase";

import type { ButtonBaseStyleProps } from "../types";
import type { IconName } from "./Icon";

interface Props extends ButtonBaseStyleProps {
  name: IconName;
  color?: string;
  hoverColor?: string;
  disabled?: boolean;
}

const StyledButton = styled(ButtonBase)<{ hoverColor?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  transition: background-color 300ms;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  :focus-visible {
    outline: solid 2px #aaa;
  }

  :disabled {
    cursor: default;

    :hover {
      background-color: transparent;
    }
  }
`;

const IconButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    name,
    color,
    hoverColor = "rgba(0, 0, 0, 0.2)",
    rippleColors,
    rippleRadius,
    disabled,
  } = props;
  const iconColor = disabled ? "#ccc" : color;

  return (
    <StyledButton
      ref={ref}
      disabled={disabled}
      hoverColor={hoverColor}
      rippleColors={rippleColors}
      rippleRadius={rippleRadius}
    >
      <Icon name={name} width={16} height={16} color={iconColor} />
    </StyledButton>
  );
});

export default IconButton;
