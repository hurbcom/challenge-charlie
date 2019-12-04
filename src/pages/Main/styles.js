import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    width: 100%
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    background: #fff;
    padding: 5px;

    svg {
        width: 64px;
        height: 64px;
        path {
            fill: #8c8885;
        }
    }

    input {
        height: 64px;
        width: 100%;
        margin-left: 15px;
        border: none;
        font-size: 2em;
        color: #8c8885;
    }
`;

export const TodayWeather = styled.div`
    height: 40%;
    width: 100%;
    background: linear-gradient(
        to top,
        rgba(226, 184, 19, 0.9),
        rgba(226, 184, 19, 1)
    );
`;

export const TomorowWeather = styled.div`
    height: 30%;
    width: 100%;
    background: linear-gradient(
        to top,
        rgba(251, 205, 6, 0.9),
        rgba(251, 205, 6, 1)
    );
`;

export const AfterTomorowWeather = styled.div`
    height: 30%;
    width: 100%;
    background: linear-gradient(
        to top,
        rgba(183, 148, 5, 0.9),
        rgba(183, 148, 5, 1)
    );
`;
