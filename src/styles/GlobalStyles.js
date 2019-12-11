import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/stylesheet.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: ${props => props.background};
        background-repeat: no-repeat;
        background-color: #666;
        background-size: cover;
        background-position: center;
    },
`;
