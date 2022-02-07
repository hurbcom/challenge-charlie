import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Trebuchet MS';
  color: white;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  height: 42px;
  align-items: center;
  text-align: center;
  padding: 8px;
`

export default Container
