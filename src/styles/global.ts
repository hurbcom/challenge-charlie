import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --white-color: #fafafa;
        --black-color: #333;
        --grey-color: #837F7E;

        --hu-color: #083D7D;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--white-color);
        -webkit-font-smoothing: antialiased;
        color: var(--black-color);
    }

    body, input, button {
        font: 16px 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
        color: var(--black-color);
    }

    button {
        cursor: pointer;
    }
`;
