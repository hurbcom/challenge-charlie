import styled from 'styled-components';

export const Location = styled.div`
  background: #F3EDED;
  width: 100%;
  height: 64px;
  border: 1px solid #ddd;    
  display: flex;
  flex-direction: row;

  span {
    border: none;
    padding: 10px;
    align-self: center;
    
    svg {
      width: 20px;
      height: 20px;

      path {
        fill: #8D8986;
      }
    }
  }

  input {
    background: #F3EDED;
    border: none;
    flex: 1;

    &::placeholder {
      color: #8D8986;
    }
  }
`;
