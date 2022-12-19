import styled from "styled-components";

interface HomeContainerProps {
    backgroundImage: string
}


export const HomeContainer = styled.div<HomeContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${(props) => props.backgroundImage});
`

export const HomeWeatherContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 70%;
    max-width: 700px;
    min-width: 350px;
    height: 500px;
    padding: 20px;
    color: #FFF;
`

export const TodaySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    background-color: rgba(112, 112, 112, 0.8);
`
export const IconColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & {
        img {
            max-width: 100px;
        }
    }
`
export const InformationsColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NextDaysSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    border-radius: 15px;
    background-color: rgba(112, 112, 112, 0.8);
`
export const SecondColumn = styled.div`
    display: grid;
   grid-gap: 20px;
`