import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'MeteoconsRegular';
    src: url('/fonts/meteocons-font/meteocons-webfont.eot');
    src: url('/fonts/meteocons-font/meteocons-webfont.eot?#iefix') format('embedded-opentype'),
        url('/fonts/meteocons-font/meteocons-webfont.woff') format('woff'),
        url('/fonts/meteocons-font/meteocons-webfont.ttf') format('truetype'),
        url('/fonts/meteocons-font/meteocons-webfont.svg#MeteoconsRegular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;