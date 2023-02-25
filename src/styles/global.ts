import { createGlobalStyle } from 'styled-components';

import MeteoconsWebfontEot from '../assets/fonts/meteocons-webfont.eot';
import MeteoconsWebfontWoff from '../assets/fonts/meteocons-webfont.woff';
import MeteoconsWebfontTtf from '../assets/fonts/meteocons-webfont.ttf';
import MeteoconsWebfontSvg from '../assets/fonts/meteocons-webfont.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  body, #root {
    max-width: 100%;
    min-height: calc(100vh);
    -webkit-font-smoothing: antialiased;
  }


    button {
      cursor: pointer;
    }

  }

  @font-face {
    font-family: 'MeteoconsRegular';
    src: url(${MeteoconsWebfontEot});
    src: url(${MeteoconsWebfontEot}) format('embedded-opentype'),
         url(${MeteoconsWebfontWoff}) format('woff'),
         url(${MeteoconsWebfontTtf}) format('truetype'),
         url(${MeteoconsWebfontSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }



  [data-icon]:before {
    font-family: 'MeteoconsRegular';
    content: attr(data-icon);
  }
`;
