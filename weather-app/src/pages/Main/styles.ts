import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const spinnerAppear = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 48px 2.4rem 2.4rem 2.4rem;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;

  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(4) {
    color: #fff;
  }

  &.cold {
    > div:nth-child(2) {
      background: #1858b5f2;
    }

    > div:nth-child(3) {
      background: #154fa2f5;
    }

    > div:nth-child(4) {
      background: #134690fa;
    }
  }

  &.hot {
    > div:nth-child(2) {
      background: #ffbf38f2;
    }

    > div:nth-child(3) {
      background: #e5ab32f5;
    }

    > div:nth-child(4) {
      background: #cc982cfa;
    }
  }

  &.too-hot {
    > div:nth-child(2) {
      background: #f95b3ff2;
    }

    > div:nth-child(3) {
      background: #e05138f5;
    }

    > div:nth-child(4) {
      background: #c74832fa;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 1.6rem;

  span,
  input {
    color: #424242;
  }

  span {
    font-size: 4rem;
    line-height: 4rem;
    height: 4rem;
  }

  input {
    flex: 1;
    font-size: 3.2rem;
    line-height: 3.2rem;
    width: calc(100% - 4rem);
    padding-left: 1.6rem;
    font-weight: bold;

    &::placeholder {
      color: #bdbdbd;
    }
  }
`;

export const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  animation: ${spinnerAppear} 500ms backwards;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    border: 0.5em solid #42424220;
    border-radius: 100%;
  }

  &:after {
    border-radius: 100%;
    border: 0.5em solid #424242;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: ${rotate} 800ms linear infinite;
  }
`;

export const WeatherToday = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > span {
    width: 60%;
    font-size: 25rem;
    display: flex;
    place-content: center;
    padding: 2.4rem 0;
  }
`;

export const WeatherDetails = styled.div`
  align-self: stretch;
  width: 40%;

  display: flex;
  flex-direction: column;

  padding-top: 2.4rem;

  strong {
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: 500;

    &:first-child {
      margin-bottom: 2.4rem;
      cursor: pointer;
    }

    &:nth-child(2) {
      margin-bottom: 1.6rem;
      text-transform: capitalize;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

export const WeatherNextDay = styled.div`
  display: flex;
  justify-content: flex-end;
`;
