import styled from "styled-components";

export const App = styled.main`
  background: url(${(props) => props.backgroundUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
`;