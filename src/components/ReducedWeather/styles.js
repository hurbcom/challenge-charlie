import styled from "styled-components";
import { media } from "../../styles/media-queries";

export const Container = styled.section`
  background: #a0a3a5;
  display: flex;
  height: 18vh;
  padding: 20px 0 0 50%;
  width: 100%;

  ${media.mobile`
    align-items: center;
    justify-content: center;
    padding: 0;
    text-align: center;
  `}

  &:nth-child(odd) {
    background: #8c8f91;
  }

  &.sunny {
    background-color: #ce3625;

    &:nth-child(odd) {
      background-color: #aa2c1e;
    }
  }

  &.cloudy {
    background-color: #d1a710;

    &:nth-child(odd) {
      background-color: #aa8e27;
    }
  }

  &.cold {
    background-color: #1b8ce8;

    &:nth-child(odd) {
      background-color: #2f7fbc;
    }
  }

  h1 {
    font-size: 2rem;
    line-height: 1.2;
    text-transform: uppercase;

    > span {
      font-size: 2.5rem;
      cursor: pointer;
    }
  }
`;