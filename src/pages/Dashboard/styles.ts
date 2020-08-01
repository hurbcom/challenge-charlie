import styled, { css } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/elefante.jpg';

interface IWeatherDayProps {
    celsius: number;
    city: string;
}

export const Container = styled.div`
    background: linear-gradient(90deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
`;

export const Header = styled.header`
    width: 100%;
    height: 64px;
    background: var(--white-color);
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.35);

    @media (max-width: 575px) {
        height: auto;
    }

    main {
        max-width: 1200px;
        padding: 10px 15px;
        height: 100%;
        margin: 0 auto;

        display: flex;
        align-items: center;

        @media (max-width: 575px) {
            align-items: flex-start;
        }

        > img {
            margin-right: 24px;
        }

        form {
            display: flex;

            @media (max-width: 575px) {
                flex-direction: column;
            }

            div:nth-child(2) {
                @media (max-width: 575px) {
                    margin: 0;
                    margin-top: 8px;
                }
            }

            button {
                @media (max-width: 575px) {
                    margin: 0;
                    margin-top: 8px;
                    width: 100%;
                }
            }
        }
    }
`;

export const Content = styled.main`
    max-width: 768px;
    width: 100%;
    position: absolute;
    top: calc(50% + 32px);
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    @media (max-width: 575px) {
        position: relative;
        transform: translate(0);
        top: 0;
        left: 0;
        margin-top: 32px;
    }
`;

export const Location = styled.div`
    background: #F2EDEA;
    padding: 16px 12px;

    display: flex;
    align-items: center;

    p {
        color: var(--grey-color);
        font-size: 32px;
        font-weight: 700;
        margin-left: 12px;

        @media (max-width: 767px) {
            font-size: 24px;
        }

        @media (max-width: 575px) {
            font-size: 21px;
        }
    }

    i {
        color: var(--grey-color);
        font-size: 32px;

        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
`;

export const Days = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;

    section {
        flex: 1;
        padding: 16px 34px 32px;
        color: var(--white-color);

        display: flex;
        justify-content: flex-end;

        > i {
            font-size: 170px;
            flex: 1;

            @media (max-width: 767px) {
                font-size: 100px;
            }
        }
    }
`;

export const Today = styled.section<IWeatherDayProps>`
    ${props => props.celsius < 15 && css`
        background: linear-gradient(90deg, rgba(4, 123, 249, .7) 0%, rgba(4, 123, 249, .7) 100%);
    `}

    ${props => props.celsius > 35 && css`
        background: linear-gradient(90deg, rgba(249, 4, 4, .7) 0%, rgba(249, 4, 4, .7) 100%);
    `}

    ${props => props.celsius >= 15 && props.celsius <= 35 && css`
        background: linear-gradient(90deg, rgba(250, 204, 5, .7) 0%, rgba(250, 204, 5, .7) 100%);
    `}

    /* Empty city search */
    ${props => props.city === '' && css`
        background: linear-gradient(90deg, rgba(131, 127, 126, .7) 0%, rgba(131, 127, 126, .7) 100%);
    `}
`;

export const Tomorrow = styled.section<IWeatherDayProps>`
    ${props => props.celsius < 15 && css`
        background: linear-gradient(90deg, rgba(4, 123, 249, .9) 0%, rgba(4, 123, 249, .9) 100%);
    `}

    ${props => props.celsius > 35 && css`
        background: linear-gradient(90deg, rgba(249, 4, 4, .9) 0%, rgba(249, 4, 4, .9) 100%);
    `}

    ${props => props.celsius >= 15 && props.celsius <= 35 && css`
        background: linear-gradient(90deg, rgba(250, 204, 5, .9) 0%, rgba(250, 204, 5, .9) 100%);
    `}

    /* Empty city search */
    ${props => props.city === '' && css`
        background: linear-gradient(90deg, rgba(131, 127, 126, .9) 0%, rgba(131, 127, 126, .9) 100%);
    `}
`;

export const AfterTomorrow = styled.section<IWeatherDayProps>`
    ${props => props.celsius < 15 && css`
        background: ${shade(.25, '#047BF9')};
    `}

    ${props => props.celsius > 35 && css`
        background: ${shade(.25, '#F90404')};
    `}

    ${props => props.celsius >= 15 && props.celsius <= 35 && css`
        background: ${shade(.25, '#FACC05')};
    `}

    /* Empty city search */
    ${props => props.city === '' && css`
        background: ${shade(.25, '#837F7E')};
    `}
`;

export const Weather = styled.div`
    display: flex;
    flex-direction: column;

    width: 360px;

    time {
        font-size: 20px;
        text-transform: uppercase;

        @media (max-width: 767px) {
            font-size: 18px;
        }
    }

    span {
        cursor: pointer;
    }

    > p {
        margin: 18px 0 12px;
        text-transform: capitalize;
        font-size: 22px;

        @media (max-width: 767px) {
            font-size: 20px;
        }
    }

    > div {
        font-size: 18px;

        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
`;