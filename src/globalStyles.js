import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: ${props => props.path ? `url(https://bing.com/${props.path})` : '#666'};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    h1,h2,h3,h4,h5,h6 {
      margin: 0
    }

    p {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }

    div#app {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 60vh;
      width: 700px;
      border: 1px solid red
    }

    //padding
    .p-vertical__40 {
      padding: 40px 0;
    }
    .p-horizontal__20 {
      padding: 0 20px;
    }

    //flexbox
    .flex-direction__row {
      display: flex;
      flex-direction: row;
    }
    .flex-direction__column {
      display: flex;
      flex-direction: column;
    }
    .flex-justify__center {
      justify-content: center;
    }

    //text
    .text-align___center {
      text-align: center;
    }

    //hover 
    .cursor__pointer:hover {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;