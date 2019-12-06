import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: ${props => props.background};
        background-repeat: no-repeat;
        background-color: #666;
        background-size: cover;
        background-position: center;
    }
`;

export const Container = styled.div`
    max-width: 600px;
    width: 100%
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 5px;

  svg {
    width: 64px;
    height: 64px;
    path {
      fill: #8c8885;
    }
  }

  input {
    height: 64px;
    width: 100%;
    margin-left: 15px;
    border: none;
    font-size: 1.8em;
    color: #8c8885;
  }
`;

export const WeatherDiv = styled.div`
  height: 25%;
  width: 100%;
  opacity: 0.9;

  &:nth-child(2) {
    height: 50%;
    background: #ffb600;
  }
  &:nth-child(3) {
    background: #ffda00;
  }
  &:nth-child(4) {
    background: #b79403;
  }
`;
