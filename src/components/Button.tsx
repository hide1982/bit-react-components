import React, { forwardRef } from "react";
import styled from "styled-components";

import style from "../constants/style";
import ButtonBase from "./ButtonBase";

import type { ButtonBaseProps as Props } from "../types";

const StyledButton = styled(ButtonBase)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  background-color: ${style.primaryColor};
  color: ${style.button.text.color};
  transition: filter 300ms;

  :hover {
    filter: brightness(0.9);
  }

  :focus-visible {
    outline: solid 2px #888;
  }

  :disabled {
    filter: brightness(1.4);
    cursor: default;

    :hover {
      filter: brightness(1.4);
    }
  }
`;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <StyledButton ref={ref} {...props} />
));

export default Button;
