import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  .iconPositioner{
    position: absolute;
    display: flex;
    height: 48px;
    align-items: center;
    left: 11px;
  }

  input {
    height: 48px;
    width: 80%;
    padding: 8px 16px 8px 63px;
    font-size: 18px;
    line-height: 48px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #535353;
    background: #FFF;
    color: #535353;
  }

  button{
    width: 15%;
    min-width: 90px;
    margin-left: 2%;
    padding: 8px;
    border: 1px solid #535353;
    border-radius: 4px;
    background: #FFF;
    color: #535353;
    font-size: 18px;
    cursor: pointer;
  }
`;

export default Form;