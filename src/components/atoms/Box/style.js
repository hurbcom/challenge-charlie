import styled, { css } from 'styled-components';


const Box = styled.div`
  height: ${({ height }) => height}em;
  width: 100%;

  ${({ mainColor, secoundColor }) => (secoundColor ? css`
    background-image: linear-gradient(to top, ${secoundColor}, ${mainColor} 0.5em);
  ` : css`
    background-color: ${mainColor};
  `)}
`;


export default Box;
