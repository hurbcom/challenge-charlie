import styled from 'styled-components';

export const FormContainer = styled.form`
  position: relative;
  width: 100%;
  display: flex;

  select {
    display: block;
    width: 100%;
    background: #ccc;
    color: #fff;
    padding: 0 15px;
    border: 5px solid #fff;
    font-family: inherit;
    font-size: 1.1em;

    option {
      color: #000;
    }
  }

  button {
    position: absolute;
    cursor: pointer;
    right: 0;
    z-index: 1;
    background: #fff;
    color: #8c8885;
    border: 0;
    padding: 10px 15px;
  }

  button[type='submit'] {
    position: initial;
  }
`;
