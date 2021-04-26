import styled from 'styled-components'

export const InputWrapper = styled.div`
  background: #fffffff2;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`
export const InputItem = styled.input`
  background: transparent;
  width: 100%;
  border: 0;
  font-size: 40px;
  padding: 15px;
  font-weight: bold;
  color: #505050;
  text-align: left;

  &:focus-visible {
    outline: none;
  }
`
