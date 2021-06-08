import styled from 'styled-components';

export const InputStyled = styled.div`
  .input__icon {
    img {
      position: absolute;
      padding: 10px;
      filter: contrast(0.1);
      width: 45px;
      top: 0px;
      left: 0px;
    }
  }

  input {
    font-family: 'Trebuchet MS';
    width: 100%;
    height: 65px;
    font-size: 1.5rem;
    padding: 30px 0px 30px 65px;
    font-weight: 600;
    box-sizing: border-box;
    color: #989898;
    border: none;
    outline: none;

    ::placeholder {
      color: #ced4da;
    }
  }
`;
