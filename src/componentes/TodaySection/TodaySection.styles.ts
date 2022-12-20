import styled from "styled-components";

export type CardColorVariant = 'background-blue' | 'background-red' | 'background-yellow' | 'background-gray'

interface SectionCardProps {
    variant: CardColorVariant
}


export const TodaySectionContainer = styled.div<SectionCardProps>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    transition: all 0.2s;
    :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.01);
    }
    background-color: ${(props) => props.theme[props.variant]};
    cursor: pointer;
    & {
        img {
            max-width: 100px;
        }
    }
`
export const IconColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InformationsColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const InformationsColumnItem = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    margin-top: 10px;
`
export const InformationTitle = styled.p`
    font-size: 24px;
    text-align: center;
`
export const InformationText = styled.p`
    font-size: 16px;
`