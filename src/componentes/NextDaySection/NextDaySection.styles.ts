import styled from "styled-components";

export type CardColorVariant = 'background-blue' | 'background-red' | 'background-yellow' | 'background-gray'

interface SectionCardProps {
    variant: CardColorVariant
}

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

export const NextDaysSectionContainer = styled.div<SectionCardProps>`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
    background-color: ${(props) => props.theme[props.variant]};
    transition: all 0.2s;
    :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.01);
    }
    & {
        img {
            max-width: 50px;
        }
    }
`