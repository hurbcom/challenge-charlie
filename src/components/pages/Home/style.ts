import styled from 'styled-components';

export const HomeStyled = styled.div<{ backgroundImage: string }>`
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background: linear-gradient(180deg, rgba(209, 145, 14, 0.7) 35%, rgba(255, 200, 55, 0.9) 140%),
    url(${(props) => props.backgroundImage});
  background-size: cover;
`;
