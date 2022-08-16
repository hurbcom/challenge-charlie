import { BounceLoader } from "react-spinners";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--blue);
  gap: 1rem;
`;

export const Loader = styled(BounceLoader)`
  span {
    background-color: var(--blue) !important;
  }
`;

export const Caption = styled.p`
  font-size: 1.5rem;
`;
