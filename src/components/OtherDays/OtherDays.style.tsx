import styled from 'styled-components'

type Props = {
  day: number
}

export const OtherDaysWrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  background: ${(p: Props) => (p.day === 1 ? 'rgba(143, 143, 143, 0.3)' : 'rgba(143, 143, 143, 0.5)')};
  padding: 20px 60px;
`
export const OtherDaysWrapperIcon = styled.div`
  flex: 1;
  min-width: 50%;
`

export const OtherDaysDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;
`
