import styled from 'styled-components'

interface Props {
  position?: any
}

export const Wrapper = styled.div`
  background-color: rgb(66 69 78 / 0.75);
  color: #fff;
  font-size: 1.6rem;
  width: 100%;
  height: 600px;
  max-width: 425px;
  border-radius: 0 0 1.2rem 1.2rem;
  padding: 1.6rem;
  transition: all 0.5s ease;
  transform: ${({ position }: Props) =>
    Object.keys(position).length === 0 ? 'scaleY(0.1)' : 'scaleY(1)'};
  margin-top: ${({ position }: Props) =>
    Object.keys(position).length === 0 ? '-33rem' : '0'};
`
export const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex: 1;
  height: 70%;
`
export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 20%;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`
export const Date = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
`
export const Temperature = styled.span`
  font-size: 6rem;
  font-weight: 700;
  transition: transform 0.25s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`
export const Divider = styled.div`
  border-top: 0.3rem dashed #fff;
  height: 0.1rem;
  width: 100%;
  max-width: 50%;
`
export const WeatherStatus = styled.h3``
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 30%;
`
export const DetailedStatus = styled.p`
  line-height: 2.5rem;
`
export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 30%;
`
export const FooterDetails = styled.div`
  height: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 0.4;
  transition: transform 0.25s ease;
  &:hover {
    transform: scale(1.2);
  }
`
export const FooterTemperature = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`
export const FooterDate = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  @media (min-width: 425px) {
    font-size: 2rem;
  }
`
export const Icon = styled.span`
  font-size: 2rem;
  color: yellow;
`
