import  styled  from 'styled-components'
import { Colors } from '../../../utils/colors'


export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${Colors.LIGHT_GRAY};
  justify-content: space-between;
`


export const InputCustom = styled.input`
  width: 90%;
  color: ${Colors.GRAY};
  background-color: ${Colors.LIGHT_GRAY};
  font-family: 'Montserrat', sans-serif;
  font-size: 3vw;
  font-weight: 600;
  text-align: center;
  border: none;
  &:focus {
    outline: none;
  }
`

export const Image = styled.img`
  width: 10%;
  height: 80%;
  align-self: center;
`
