import React, { forwardRef } from "react";
import styled from "styled-components";

import style from "../constants/style";
import ButtonBase, { Props as ButtonBaseProps } from "./ButtonBase";

const StyledButton = styled(ButtonBase)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  background-color: ${style.primaryColor};
  color: ${style.button.text.color};
  transition: filter 200ms;

  :hover {
    filter: brightness(0.9);
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
    border-width: 20px 40px 0 0;
    border-color: #fff transparent transparent transparent;
  }

  ::after {
    bottom: 0;
    right: 0;
    border-width: 0 0 20px 40px;
    border-color: transparent transparent #fff transparent;
  }

  :focus-visible {
    ::before,
    ::after {
      opacity: 0.4;
    }
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => (
  <StyledButton ref={ref} {...props} />
));

export default Button;
