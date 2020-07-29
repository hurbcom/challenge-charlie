import styled, { css } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/elefante.jpg';

interface WeatherDayProps {
    celcius: number;
}

export const Container = styled.div`
    background: linear-gradient(90deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-position: cover;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.main`
    max-width: 768px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`;

export const Location = styled.div`
    background: #F2EDEA;
    padding: 16px 12px;
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.35);

    display: flex;
    align-items: center;

    p {
        color: var(--grey-color);
        font-size: 45px;
        font-weight: 700;
        margin-left: 12px;
    }

    i {
        color: var(--grey-color);
        font-size: 45px;
    }
`;

export const Days = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;

    section {
        flex: 1;
        padding: 16px 40px 32px;
        color: var(--white-color);

        display: flex;
        justify-content: flex-end;

        i {
            font-size: 200px;
            flex: 1;
        }
    }
`;

export const Today = styled.section<WeatherDayProps>`
    ${props => props.celcius < 15 && css`
        background: linear-gradient(90deg, rgba(4, 123, 249, .7) 0%, rgba(4, 123, 249, .7) 100%);
    `}

    ${props => props.celcius > 35 && css`
        background: linear-gradient(90deg, rgba(249, 4, 4, .7) 0%, rgba(249, 4, 4, .7) 100%);
    `}

    ${props => props.celcius >= 15 && props.celcius <= 35 && css`
        background: linear-gradient(90deg, rgba(250, 204, 5, .7) 0%, rgba(250, 204, 5, .7) 100%);
    `}
`;

export const Tomorrow = styled.section<WeatherDayProps>`
    ${props => props.celcius < 15 && css`
        background: linear-gradient(90deg, rgba(4, 123, 249, .9) 0%, rgba(4, 123, 249, .9) 100%);
    `}

    ${props => props.celcius > 35 && css`
    background: linear-gradient(90deg, rgba(249, 4, 4, .9) 0%, rgba(249, 4, 4, .9) 100%);
    `}

    ${props => props.celcius >= 15 && props.celcius <= 35 && css`
        background: linear-gradient(90deg, rgba(250, 204, 5, .9) 0%, rgba(250, 204, 5, .9) 100%);
    `}
`;

export const AfterTomorrow = styled.section<WeatherDayProps>`
    ${props => props.celcius < 15 && css`
        background: ${shade(.25, '#047BF9')};
    `}

    ${props => props.celcius > 35 && css`
        background: ${shade(.25, '#F90404')};
    `}

    ${props => props.celcius >= 15 && props.celcius <= 35 && css`
        background: ${shade(.25, '#FACC05')};
    `}
`;

export const Weather = styled.div`
    display: flex;
    flex-direction: column;

    width: 360px;
    font-size: 32px;

    time {
        text-transform: uppercase;
    }

    > p {
        margin: 18px 0 12px;
    }

    > div {
        font-size: 24px;
    }
`;