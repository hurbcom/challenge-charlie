import styled from "styled-components";

export const App = styled.main`
  align-items: center;
  background: url(${(props) => props.backgroundUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;