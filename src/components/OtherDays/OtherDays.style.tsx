import styled from 'styled-components'

type Props = {
  color: string
}

export const OtherDaysWrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  background: ${(p: Props) => p.color};
  padding: 20px 60px;
`
export const OtherDaysWrapperIcon = styled.div`
  flex: 1;
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OtherDaysDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;
`
