import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import breakpoints from './breakpoints';
import colors from './colors';
import fonts from './fonts';


injectGlobal([`
  ${reset}

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  @font-face {
    font-family: '${fonts.icon}';
    src:  url('assets/fonts/meteocons-webfont.eot');
    src:  url('assets/fonts/meteocons-webfont.eot?#iefix') format('embedded-opentype'),
          url('assets/fonts/meteocons-webfont.woff') format('woff'),
          url('assets/fonts/meteocons-webfont.ttf') format('truetype'),
          url('assets/fonts/meteocons-webfont.svg#${fonts.icon}') format('svg');
    font-style: normal;
    font-weight: normal;
  }
`]);


export default {
  breakpoints,
  colors,
  fonts,
};
