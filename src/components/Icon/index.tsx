import React, { forwardRef } from "react";
import styled from "styled-components";

import getIcon, { IconName as Name } from "../../utils/getIcon";
import style from "../../constants/style";

export type IconName = Name;

interface Props {
  name: Name;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

type IconWrapperProps = {
  styles: Required<Pick<Props, "height" | "width" | "color">>;
};

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-block;
  height: ${({ styles }) => styles.height}px;
  width: ${({ styles }) => styles.width}px;

  svg {
    fill: ${({ styles }) => styles.color};
  }
`;

const Icon = forwardRef<HTMLDivElement, Props>(
  (
    {
      name,
      width = style.icon.sizeDefault,
      height = style.icon.sizeDefault,
      color = style.icon.colorDefault,
    },
    ref
  ): JSX.Element => {
    const Icon = getIcon(name);

    return (
      <IconWrapper ref={ref} styles={{ width, height, color }}>
        {Icon}
      </IconWrapper>
    );
  }
);

export default Icon;
