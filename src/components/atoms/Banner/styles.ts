import  styled  from 'styled-components'
import { Colors } from '../../../utils/colors'

export const ContainerBanner = styled.div<{ backgroundColor: string, height: string, opacity: string }>`
  width: 100%;
  height: ${({height}) => height };
  display: flex;
  flex-direction: row;
  background: ${({backgroundColor}) => backgroundColor };
  opacity: ${({opacity}) => opacity };
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
export const Line = styled.p<{ tempMouseHover?: boolean }>`
  color: ${Colors.WHITE};
  font-size: 2.5vw;
  font-weight: 600;
  margin:16px;
  &:hover {
    cursor: ${({tempMouseHover}) => tempMouseHover ? 'pointer' : ''};
  }

`

export const SpaceBetween = styled.div`
  height: 16px;
`

export const SmallLine = styled.p`
  font-size: 1.5vw;
  line-height: 14px;
  font-weight: 600;
  margin: 14px;
  color: ${Colors.WHITE};
`