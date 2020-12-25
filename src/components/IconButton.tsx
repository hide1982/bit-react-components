import React, { forwardRef } from "react";
import styled from "styled-components";

import Icon from "./Icon";
import ButtonBase from "./ButtonBase";

import type { IconName } from "./Icon";

interface Props {
  name: IconName;
  disabled?: boolean;
}

const StyledButton = styled(ButtonBase)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  transition: background-color 300ms;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ::before,
  ::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 300ms;
    border-style: solid;
  }

  ::before {
    top: 0;
    left: 0;
    border-width: 10px 10px 0 0;
    border-color: #000 transparent transparent transparent;
  }

  ::after {
    bottom: 0;
    right: 0;
    border-width: 0 0 10px 10px;
    border-color: transparent transparent #000 transparent;
  }

  :focus-visible {
    ::before,
    ::after {
      opacity: 0.4;
    }
  }

  :disabled {
    cursor: default;

    svg {
      fill: #ccc;
    }

    :hover {
      background-color: transparent;
    }
  }
`;

const IconButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <StyledButton ref={ref} disabled={props.disabled}>
      <Icon name={props.name} width={16} height={16} />
    </StyledButton>
  );
});

export default IconButton;
