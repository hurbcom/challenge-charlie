import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
//montar demais cores
:root {
--highlight_yellow:#705E00
--dark-yellow:#F0C000
--medium-yellow:#F5D90A
--light-yellow:#FFEF5C

--highlight-red:#822025
--dark-red:#AA2429
--medium-red:#E5484D
--light-red:#F2555A

--highlight-blue:#044481
--dark-blue:#0954A5
--medium-blue:#0091FF
--light-blue:#369EFF
}
  *{
    margin: 0;
    padding: 0;
    font-family: Nunito, sans-serif;
    color: white;
  }
 button{
    cursor: pointer;
 }
`;

export default GlobalStyle;
