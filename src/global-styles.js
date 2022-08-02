import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  
    color: #fff;
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:sans-serif;
  }
p{
  margin: 1em 0;
}
span{display: block;
    color: #fff;
    font-size: 3.5vh;
    text-transform: Capitalize;}
`;

export default GlobalStyles;
