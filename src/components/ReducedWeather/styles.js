import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 18vh;
  padding: 20px 0 0 50%;
  width: 100%;

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