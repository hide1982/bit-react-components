import React, { forwardRef, useState } from "react";
import styled from "styled-components";

import style from "../constants/style";

const StyledInput = styled.input`
  box-sizing: border-box;
  outline: none;
  height: 32px;
  padding: 0 12px;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid 1px #333;
  transition: background-color ${style.transition.duration};

  :focus {
    background-color: transparent;
  }
`;

export interface TextFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    value: initialValue = "",
    onChange,
    placeholder,
    disabled,
  } = props;
  const [value, setValue] = useState(initialValue);

  return (
    <StyledInput
      className={className}
      ref={ref}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (onChange) onChange(e);
        setValue(e.target.value);
      }}
      disabled={disabled}
      data-testid="text-field"
    />
  );
});

export default TextField;
