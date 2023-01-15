import  styled  from 'styled-components'
import { Colors } from '../../../utils/colors'

export const ContainerBanner = styled.div<{ backgroundColor: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: ${({backgroundColor}) => backgroundColor };
  align-items: center;
  justify-content: space-between;
`
export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export const ImageArea = styled.img`
  width: 50%;
  height: 50%;
  align-self: center;
`
export const Description = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

`
export const Line = styled.p`
  color: ${Colors.WHITE};
  font-size: 2.5vw;
  line-height: 16px;
  font-weight: 600;
  margin:16px;

`

export const SpaceBetween = styled.div`
  height: 16px;
`

export const SmallLine = styled.p`
  color: ${Colors.WHITE};
`