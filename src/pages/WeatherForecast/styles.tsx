import styled from 'styled-components';

import { backgroundColor } from '../../utils/backgroundColor';
interface WeatherForecastProps {
    temperature?: number;
}
export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    border: none;
    background: ${(props: WeatherForecastProps) =>
        props.temperature ? backgroundColor(props.temperature) : '#fffff'};
`;

export const FormSearchContainer = styled.form`
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    color: #000000;

    > button {
        border: none;
        padding: 0.5rem;
        background: #000000;
        color: #ffffff;
        border-radius: 4px;
    }
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
        margin: 1.5rem;
    }
    > span {
        text-transform: capitalize;
        line-height: 2rem;
    }
`;

export const TodayOthersInfoContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    justify-content: space-between;
`;

export const TodayOthersInfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    :last-child {
        margin-right: 0;
    }
    > img {
        width: 30px;
        margin-right: 0.5rem;
    }
`;

export const TomorrowInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    > div {
        display: flex;
        align-items: center;
        > span {
            margin-right: 1rem;
        }
        > img {
            width: 40px;
        }
    }
`;

export const AfterTomorrowInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
        > span {
            margin-right: 1rem;
        }
        > img {
            width: 40px;
        }
    }
`;
