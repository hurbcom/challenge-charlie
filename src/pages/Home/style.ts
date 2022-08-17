import styled from "styled-components";
import { DESKTOP_MAX_WIDTH } from "./../../common/constants";

export const Container = styled.main`
  min-height: 100vh;
  max-width: ${DESKTOP_MAX_WIDTH}px;
  flex: 1;
`;
