import { createGlobalStyle, css } from 'styled-components';

import MeteoconsWebfontEot from '@assets/fonts/meteocons-webfont.eot';
import MeteoconsWebfontWoff from '@assets/fonts/meteocons-webfont.woff';
import MeteoconsWebfontTtf from '@assets/fonts/meteocons-webfont.ttf';
import MeteoconsWebfontSvg from '@assets/fonts/meteocons-webfont.svg';

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 93.74%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body,
  #root {
    max-width: 100%;
    min-height: calc(100vh);
    -webkit-font-smoothing: antialiased;

    font-size: 16px;
    font-family: 'Roboto', sans-serif, Arial;
  }

  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'MeteoconsRegular';
    src: url(${MeteoconsWebfontEot});
    src: url(${MeteoconsWebfontEot}) format('embedded-opentype'), url(${MeteoconsWebfontWoff}) format('woff'),
      url(${MeteoconsWebfontTtf}) format('truetype'), url(${MeteoconsWebfontSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  [data-icon]:before {
    font-family: 'MeteoconsRegular';
    content: attr(data-icon);
  }
`}}
`;
