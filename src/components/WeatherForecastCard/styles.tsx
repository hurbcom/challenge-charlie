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
    color: #ffffff;
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
    }
    > span {
        font-size: 1.5rem;
        text-transform: capitalize;
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
