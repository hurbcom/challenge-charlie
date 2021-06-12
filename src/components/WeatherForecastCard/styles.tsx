import styled, { css } from 'styled-components';

import { backgroundColor } from '../../utils/backgroundColor';
interface WeatherForecastProps {
    temperature?: number;
}
export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    max-width: 420px;
    min-height: 500px;
    border: none;
    color: #000000;
    background: ${(props: WeatherForecastProps) =>
        props.temperature ? backgroundColor(props.temperature) : '#fffff'};
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`;

export const TodayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TodayInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5rem;
    padding: 1.5rem;
    > img {
        width: 80px;
        margin: 1rem;
    }
    > div > h1 {
        font-size: 3.375rem;
        line-height: 3.5rem;
        cursor: pointer;
        transition: transform 0.1s;
        -webkit-transition: transform 0.1s;
        :hover {
            -webkit-animation: pulse 0.25s;
            animation: pulse 0.25s;
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -moz-transform: scale(1.1);
            transform: scale(1.1);
        }
        @keyframes pulse {
            0% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                -moz-transform: scale(1);
                transform: scale(1);
            }
            100% {
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                -moz-transform: scale(1.1);
                transform: scale(1.1);
            }
        }
    }
    > span {
        font-size: 1.5rem;
        text-transform: capitalize;
    }
`;

const contentStyle = css`
    display: flex;
    width: 100%;
    padding: 1.5rem;
    justify-content: space-between;
`;
export const TodayOthersInfoContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0 1.5rem 1.5rem 1.5rem;
    justify-content: space-between;
    margin: 0 auto;
    justify-content: space-between;
    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
            margin-top: 0.5rem;
        }
    }
`;

export const TomorrowContainer = styled.div`
    ${contentStyle}
`;

export const AfterTomorrowContainer = styled.div`
    ${contentStyle}
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    height: 500px;
    text-align: center;
    > span {
        font-size: 1.5rem;
    }
`;
