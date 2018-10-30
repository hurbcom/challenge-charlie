const themes = {
  small: {
    fontSize: 0.8,
    paddingVertical: 0.2,
  },
  medium: {
    fontSize: 1,
    paddingVertical: 0.2,
  },
  large: {
    fontSize: 2.5,
    paddingVertical: 0.1,
  },
};

const getTheme = (theme, type) => ({
  ...theme,
  text: themes[type],
});


export default getTheme;
