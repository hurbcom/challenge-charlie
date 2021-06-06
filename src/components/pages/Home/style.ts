import Color from 'color';
import styled from 'styled-components';

export const HomeStyled = styled.div<{ backgroundImage: string; backgroundColor: string | Color }>`
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background: ${(props) =>
    `linear-gradient(180deg, ${(props.backgroundColor as Color).fade(0.5).string()} 35%, ${
      props.backgroundColor as Color
    } 140%), url(${props.backgroundImage})`};
  background-size: cover;
`;
