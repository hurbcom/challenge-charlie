import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 48px 2.4rem 2.4rem 2.4rem;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
`;

export const InputContainer = styled.div`
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
