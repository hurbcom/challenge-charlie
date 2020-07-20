import styled from "styled-components";

export const Weather = styled.div`
  background-color: #ccc;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  opacity: 0.8;
  width: 1200px;
`;

export const Container = styled.section`
  display: flex;
  height: 50vh;
  width: 100%;

  &.sunny {
    background-color: #f2422b;
  }

  &.cloudy {
    background-color: #f2c113;
  }

  &.cold {
    background-color: #37a1f2;
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;

  &:first-child {
    text-align: center;
  }
`;

export const Temp = styled.div`
  h1 {
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;

    > span {
      font-size: 40px;
    }
  }
`;

export const Description = styled.div`
  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p {
    font-size: 28px;
  }
`;

export const Icon = styled.span`
  font-family: 'MeteoconsRegular';
  font-size: 18vw;
`;