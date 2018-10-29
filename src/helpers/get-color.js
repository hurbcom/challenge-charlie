const getColor = (theme, temperature) => {
  const { colors } = theme;
  if (!temperature) {
    return {
      light: colors.lightGrey,
      color: colors.grey,
      dark: colors.darkGrey,
    };
  }
  if (temperature <= 15) {
    return {
      light: colors.lightBlue,
      color: colors.blue,
      dark: colors.darkBlue,
    };
  }
  if (temperature <= 35) {
    return {
      light: colors.lightYellow,
      color: colors.yellow,
      dark: colors.darkYellow,
    };
  }
  return {
    light: colors.lightRed,
    color: colors.red,
    dark: colors.darkRed,
  };
};


export default getColor;
