import styled from "styled-components";

export const App = styled.div`
  background-image: url(${(props) => props.backgroundUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;

  p {
    font-family: 'MeteoconsRegular';
  }
`;