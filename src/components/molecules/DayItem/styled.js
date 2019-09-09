// Import styled-component
import styled from 'styled-components';

// Import Utils
import { hex2rgba } from '../../../utils/helpers';

// Export componentes
export const Day = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    height: 20%;

    &:first-child{
        height: 60%;
    }

    /* Degradê de cores */
    &:nth-child(1){
        background: ${props => hex2rgba( props.color1, '0.95' )} 
    }

    &:nth-child(2){
        background: ${props => hex2rgba( props.color2, '0.95' )} 
    }

    &:nth-child(3){
        background: ${props => hex2rgba( props.color3, '0.95' )} 
    }
`;

export const BoxIcon = styled.div`
    width: 100%;
    text-align: center;

    ${Day}:not(:first-child) && {
        display: none;
    }

    @media (min-width: 734px){
        width: 54%;

        ${Day}:not(:first-child) && {
            display: initial;
        }
    }
`;

export const IconDay = styled.div`
    font-size: 80px;
    line-height: 1;

    @media (min-width: 734px){
        font-size: 270px;
    }

    ${Day}:not(:first-child) && {
        display: none;
    }
`;

export const BoxInfos = styled.div`
    position: relative;
    font-weight: 600;
    width: 100%;
    text-align: center;

    @media (min-width: 734px){
        width: auto;
        text-align: left;
    }
`;

export const Temperature = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    display: inline-block;

    ${Day}:first-child && {
        margin-bottom: 10px;
    }

    @media (min-width: 734px){
        font-size: 27px;

        ${Day}:first-child && {
            margin-bottom: 20px;
        }
    }
`;

export const TemperatureTip = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    text-transform: capitalize;

    @media (min-width: 734px){
        font-size: 27px;
    }

    ${Day}:not(:first-child) && {
        display: none;
    }
`;

export const Statistics = styled.div`
    font-size: 14px;
    margin-bottom: 20px;

    @media (min-width: 734px){
        font-size: 20px;
        margin-bottom: 0px;
    }

    ${Day}:not(:first-child) && {
        display: none;
    }
`;

export const Static = styled.div`
    ${Day}:not(:first-child) && {
        display: none;
    }
`;
