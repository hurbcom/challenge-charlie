import styled from 'styled-components';

export const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 auto;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 700px) {
    h2,
    span,
    strong {
      font-size: 14px;
    }

    svg {
      width: 100px;
    }
  }
`;
