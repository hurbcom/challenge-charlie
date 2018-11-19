import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import breakpoints from './breakpoints';
import colors from './colors';
import fonts from './fonts';


export const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  @font-face {
    font-family: '${({ theme }) => theme.fonts.icon}';
    src:  url('assets/fonts/meteocons-webfont.eot');
    src:  url('assets/fonts/meteocons-webfont.eot?#iefix') format('embedded-opentype'),
          url('assets/fonts/meteocons-webfont.woff') format('woff'),
          url('assets/fonts/meteocons-webfont.ttf') format('truetype'),
          url('assets/fonts/meteocons-webfont.svg#${({ theme }) => theme.fonts.icon}') format('svg');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: 'Roboto-Regular';
    src:  url('assets/fonts/Roboto-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
  }
`;


export default {
  breakpoints,
  colors,
  fonts,
};
