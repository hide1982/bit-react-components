// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

import icons from "../assets/icons";

export type IconName = keyof typeof icons;

const getIcon = (name: IconName) => {
  const icon = icons[name];

  return icon;
};

export default getIcon;
