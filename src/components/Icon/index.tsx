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

type IconWrapperProps = Required<Pick<Props, "height" | "width" | "color">>;

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-block;

  svg {
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    fill: ${({ color }) => color};
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
      <IconWrapper ref={ref} height={height} width={width} color={color}>
        {Icon}
      </IconWrapper>
    );
  }
);

export default Icon;
