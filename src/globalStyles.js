import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-image: ${props => props.path ? `url(https://bing.com/${props.path})` : '#666'};
    height: 100vh
  }
`;

export default GlobalStyle;