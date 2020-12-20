import React from "react";

import icons from "../assets/icons";

export type IconName = keyof typeof icons;

interface Props {
  name: IconName;
}

const getIcon = ({ name }: Props) => {
  const icon = icons[name];

  return icon;
};

export default getIcon;
