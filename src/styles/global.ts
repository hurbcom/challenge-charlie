import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;
