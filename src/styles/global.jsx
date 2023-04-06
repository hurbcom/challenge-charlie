import { createGlobalStyle } from "styled-components";
import meteoconsEot from "../static/fonts/meteocons-webfont.eot";
import meteoconsWoff from "../static/fonts/meteocons-webfont.woff";
import meteoconsTtf from "../static/fonts/meteocons-webfont.ttf";
import meteoconsSvg from "../static/fonts/meteocons-webfont.svg";

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol,
  ul {
      list-style: none;
  }
  blockquote,
  q {
      quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
      content: "";
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }


  body {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  body,
  input,
  textarea,
  button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  @font-face {
      font-family: "MeteoconsRegular";
      src: url(${meteoconsEot});
      src: url(${meteoconsEot}?#iefix)
              format("embedded-opentype"),
          url(${meteoconsWoff}) format("woff"),
          url(${meteoconsTtf}) format("truetype"),
          url(${meteoconsSvg}#MeteoconsRegular)
              format("svg");
      font-weight: normal;
      font-style: normal;
  }

  [data-icon]:before {
      font-family: "MeteoconsRegular";
      content: attr(data-icon);
  }

`;
