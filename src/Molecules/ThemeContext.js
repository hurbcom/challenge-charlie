import { createContext } from 'react';

export const themes = {
    noInfo: 'noInfo',
    sunny: 'sunny',
    normal: 'normal',
    cold: 'cold',
    ChangeCity: () => ({}),
    ChangeMeters: () => ({}),
  };
  
  export const ThemeContext = createContext(
    themes
  );