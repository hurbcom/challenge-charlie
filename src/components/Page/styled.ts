import styled from 'styled-components';

export const SPage = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 1vh;
  width: 100%;

  @media (min-width: 601px) {
    width: 560px;
    padding-top: 2vh;
  }

  @media (min-width: 961px) {
    padding-top: 3vh;
  }

  @media (min-width: 1281px) {
    padding-top: 5vh;
  }
`;
