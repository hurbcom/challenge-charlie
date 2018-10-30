import styled, { css } from 'styled-components';


const Box = styled.div`
  align-items: center;
  display: flex;
  height: ${({ height }) => height}em;
  justify-content: center;
  width: 100%;

  ${({ mainColor, secoundColor }) => (secoundColor ? css`
    background-image: linear-gradient(to top, ${secoundColor}, ${mainColor} 0.5em);
  ` : css`
    background-color: ${mainColor};
  `)}
`;


export default Box;
