import styled from 'styled-components';

export const Container = styled.main`
  > img {
    position: absolute;
    z-index: -1;

    object-fit: cover;
    opacity: 0.2;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 600px;
`;

export const WeatherWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
  }
`;
