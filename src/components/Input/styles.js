import styled from 'styled-components';

export const Container = styled.div`
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
    background: inherit;
  }
`;
