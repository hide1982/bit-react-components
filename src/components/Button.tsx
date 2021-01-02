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
  background-color: #aaa;
  color: #fff;
  transition: filter 300ms;

  :hover {
    filter: ${style.filter.hover};
  }

  :focus-visible {
    outline: ${style.outline};
  }

  :disabled {
    filter: ${style.filter.disabled};
    cursor: default;

    :hover {
      filter: ${style.filter.disabled};
    }
  }
`;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <StyledButton ref={ref} {...props} />
));

export default Button;
