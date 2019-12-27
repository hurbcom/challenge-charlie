import styled from 'styled-components';

export const Location = styled.div`
  background: #F3EDED;
  border: 1px solid #ddd;    
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100%;

  span {
    border: none;
    padding: 10px;
    align-self: center;
    
    svg {
      width: 32px;
      height: 32px;

      path {
        fill: #8D8986;
      }
    }
  }

  input {
    background: #F3EDED;
    border: none;
    color: #8D8986;
    flex: 1;
    font-size: 24px;
    font-weight: 600;
    overflow: auto;

    &::placeholder {
      color: #8D8986;
    }
  }

  @media (max-width: 840px) {
    span {
      svg {
        width: 24px;
        height: 24px;
      }
    }

    input {
      font-size: 16px;
    }
  }
`;
