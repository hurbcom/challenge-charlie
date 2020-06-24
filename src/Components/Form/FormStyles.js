import styled from 'styled-components';

export const FormStyles = styled.form`
  width: 100%;
  label{
    width: 100%;
    height: 161px;
    position: relative;
    display: block;
    .icon, input{
      left: 25px;
      color: #7e7a79;
    }
    .icon{
      position: absolute;
      font-size: 50px;
      position: absolute;
      font-size: 70px;
      top: 50%;
      transform: translateY(-50%);
      left: 25px;
    }
    input{
      height: 100%;
      width: 100%;
      border: none;
      padding: 0 80px 0 150px;
      font-size: 50px;
      font-weight: 700;
      outline: none;
    }
  }
`;
