const themes = {
  medium: {
    fontSize: 2.5,
  },
  large: {
    fontSize: 10,
  },
};

const getTheme = (theme, type) => ({
  ...theme,
  icon: themes[type],
});


export default getTheme;
