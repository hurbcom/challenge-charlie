import styled from "styled-components";

interface HomeContainerProps {
    backgroundImage: string
}

export type CardColorVariant = 'background-blue' | 'background-red' | 'background-yellow' | 'background-gray'

interface SectionCardProps {
    variant: CardColorVariant
}

export const HomeContainer = styled.div<HomeContainerProps>`
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgba(200, 200, 200, 0.8), rgba(0, 0, 0, 0.8)),url(${(props) => props.backgroundImage});
`
export const WeatherInformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.form`
    width: 70%;
    max-width: 700px;
    min-width: 350px;
    padding: 20px;
    margin-bottom: 50px;
    margin-top: 50px;
    
    @media (max-width: 860px) {
        margin-bottom: 10px;
        margin-top: 10px;
    }
`

export const HomeWeatherContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 70%;
    max-width: 700px;
    min-width: 350px;
    padding: 20px;
    color: #FFF;

    @media (max-width: 860px) {
        grid-template-columns: 1fr;
    }
`
export const InformationTitle = styled.p`
    font-size: 24px;
    text-align: center;
`
export const SecondColumn = styled.div`
    display: grid;
    grid-gap: 20px;
`

export const CityInformationContainer = styled.div`
    width: 70%;
    max-width: 700px;
    min-width: 350px;
    padding: 20px;
`

export const CityInformationSection = styled.div<SectionCardProps>`
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    border-radius: 15px;
    grid-gap: 10px;
    background-color: ${(props) => props.theme[props.variant]};
    
    & {
        img {
            max-width: 50px;
        }
    }
    padding:20px 50px;
    color: #FFF;
`