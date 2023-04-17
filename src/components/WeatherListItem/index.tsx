import styled, { css } from "styled-components";
import Icon from "components/Icon";

export type WeatherItemDataType = {
    day: string;
    temperature: number;
    weatherDescription: string;
    windSpeed: number;
    windDirection: string;
    pressure: number;
    humidity: number;
};

export type WeatherItemType = {
    compact?: boolean;
    data: WeatherItemDataType;
};

const isYellowContrastRange = (temperature: number) =>
    temperature > 14 && temperature < 23;

const getDayColor = (temperaure: number) => {
    const colors = [
        "#002e3c",
        "#003c4f",
        "#004d66",
        "#006382",
        "#006d8f",
        "#338aa5",
        "#549db4",
        "#8abccb",
        "#9BC2C2",
        "#ffe58a",
        "#fed954",
        "#fed233",
        "#fec700",
        "#e7b500",
        "#b48d00",
        "#8c6d00",
        "#6b5400",
        "#ff7f61",
        "#ff6642",
        "#ff4013",
        "#e83a11",
        "#b52d0d",
        "#8c230a",
    ];

    if (temperaure < 1) return colors[0];

    const temperatureColorIndex = Math.ceil(temperaure * 0.25) * 2 + 1;
    return temperatureColorIndex < colors.length
        ? colors[temperatureColorIndex]
        : colors[colors.length - 1];
};

const WheaterIcon = styled.div`
    display: flex;
    height: 155;
    width: 155;
    align-items: center;
    justify-content: center;

    & > * {
        font-size: 9rem;
        color: #ffffff;
    }
`;

const WheaterDetails = styled.ol<{ temperature: number }>`
    list-style-type: none;
    flex-grow: 1;
    padding: 16px 0;

    font-size: 12px;
    font-weight: 300;
    ${({ temperature }) =>
        isYellowContrastRange(temperature) &&
        css`
            color: #7b7508;
        `};

    & :nth-child(-n + 3) {
        font-size: 16px;
    }

    & :nth-child(-n + 2) {
        text-transform: uppercase;
    }

    & :nth-child(3) {
        margin-top: 16px;
        margin-bottom: 8px;
        text-transform: capitalize;
    }
`;

const WeatherListItemBase = styled.div<{ temperature: number }>`
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    background-color: ${(props) => getDayColor(props.temperature)};
    opacity: 0.75;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
`;

const WeatherListItem = ({
    compact = true,
    data,
    ...props
}: WeatherItemType) => {
    return (
        <WeatherListItemBase
            temperature={data?.temperature}
            role="presentation"
        >
            <WheaterIcon>{!compact ? <Icon name="sunny" /> : null}</WheaterIcon>
            <WheaterDetails temperature={data?.temperature}>
                <li>{data?.day}</li>
                <li>{Math.ceil(data?.temperature)}</li>
                {compact ? null : (
                    <>
                        <li>{data?.weatherDescription}</li>
                        <li>
                            Vento: {data?.windDirection} {data?.windSpeed}km/h
                        </li>
                        <li>Humidade: {data?.humidity}%</li>
                        <li>Pressão: {data?.pressure}hPA</li>
                    </>
                )}
            </WheaterDetails>
        </WeatherListItemBase>
    );
};

export default WeatherListItem;
