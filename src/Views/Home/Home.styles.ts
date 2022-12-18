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
    width: 70%;
    max-width: 700px;
    min-width: 350px;
    height: 500px;
    padding: 20px;
`

export const TodaySection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 16px;
    padding: 20px;
    border-radius: 15px;
    background-color: aliceblue;
`
export const IconColumn = styled.div`
    width: 100%;
`
export const InformationsColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const NextDaysSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 16px;
    padding: 20px;
    border-radius: 15px;
    background-color: aliceblue;
`