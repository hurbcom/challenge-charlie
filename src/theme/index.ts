import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    grayColor: string;
    fontFamily: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: '#CC0000',
  secondaryColor: '#75B2AA',
  grayColor: '#B1B5C3',
  fontFamily: 'Inter',
};

export const darkTheme: DefaultTheme = {
  primaryColor: '#CC0000',
  secondaryColor: '#75B2AA',
  grayColor: '#B1B5C3',
  fontFamily: 'Inter',
};
