import React, { forwardRef, useState } from "react";
import styled from "styled-components";

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const StyledInput = styled.input`
  box-sizing: border-box;
  outline: none;
  height: 32px;
  padding: 0 12px;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px #333;

  :focus {
    background-color: transparent;
  }
`;

const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, value: initialValue = "", onChange, placeholder } = props;
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
    />
  );
});

export default TextField;
