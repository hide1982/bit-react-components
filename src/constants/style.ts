const COLOR_TEXT = "#000";
const COLOR_DISABLED_TEXT = "#ccc";
const COLOR_PRIMARY = "blue";
const COLOR_SECONDARY = "red";
const FONT_SIZE = 16;

const style = {
  primaryColor: COLOR_PRIMARY,
  secondaryColor: COLOR_SECONDARY,
  textColor: COLOR_TEXT,
  border: {
    colorDefault: COLOR_TEXT,
  },
  text: {
    color: COLOR_TEXT,
    disabledColor: COLOR_DISABLED_TEXT,
    size: FONT_SIZE,
  },
  icon: {
    colorDefault: COLOR_TEXT,
    sizeDefault: FONT_SIZE,
    sizeSmall: FONT_SIZE - 4,
    sizeLarge: FONT_SIZE + 4,
  },
};

export default style;
