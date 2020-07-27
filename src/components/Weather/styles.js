import styled from "styled-components";
import { media } from "../../styles/media-queries";

export const Weather = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  opacity: 0.8;
  width: 100%;

  ${media.desktop`
    width: 1200px;
  `}
`;

export const Loading = styled.div`
  background-color: ${(props) => props.bg};
  width: 100%;
  height: ${(props) => props.height};

  ${(props) => props.animation ? `animation: loading 2s infinite` : ''};

  @keyframes loading {
    0% {
      opacity: 0.8;
    }

    50% {
      opacity: 0.6;
    }

    100% {
      opacity: 0.4;
    }
  }
`;

export const Container = styled.section`
  background-color: #b2b5b7;
  display: flex;
  height: 50vh;
  width: 100%;

  ${media.mobile`
    flex-direction: column;
  `}

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

  ${media.mobile`
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    text-align: center;
  `}

  &:first-child {
    text-align: center;
  }
`;

export const Temp = styled.div`
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

export const Description = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.75rem;
  }
`;

export const Icon = styled.span`
  font-family: 'MeteoconsRegular';
  font-size: 18vw;

  ${media.mobile`
    font-size: 25vw;
  `}
`;