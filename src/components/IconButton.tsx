import React, { forwardRef, MouseEventHandler } from "react";
import styled from "styled-components";

import style from "../constants/style";
import Icon, { IconName } from "./Icon";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

const StyledButton = styled(ButtonBase)<{ hoverColor?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  transition: background-color ${style.transition.duration};

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  :focus-visible {
    outline: ${style.outline};
  }

  :disabled {
    cursor: default;

    :hover {
      background-color: transparent;
    }
  }
`;

export interface IconButtonProps extends ButtonBaseProps {
  name: IconName;
  color?: string;
  hoverColor?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      name,
      color,
      hoverColor = "rgba(0, 0, 0, 0.2)",
      rippleColors,
      rippleRadius,
      disabled,
      onClick,
      className,
    } = props;
    const iconColor = disabled ? "#ccc" : color;

    return (
      <StyledButton
        ref={ref}
        disabled={disabled}
        hoverColor={hoverColor}
        rippleColors={rippleColors}
        rippleRadius={rippleRadius}
        onClick={onClick}
        className={className}
        data-testid="icon-button"
      >
        <Icon name={name} color={iconColor} />
      </StyledButton>
    );
  }
);

export default IconButton;
