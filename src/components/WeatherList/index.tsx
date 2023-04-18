import styled from "styled-components";
import WeatherListItem, {
    WeatherItemDataType,
} from "components/WeatherListItem";

const WeatherListBase = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.05),
        0 2px 2px hsl(0deg 0% 0% / 0.05), 0 4px 4px hsl(0deg 0% 0% / 0.05),
        0 8px 8px hsl(0deg 0% 0% / 0.05), 0 16px 16px hsl(0deg 0% 0% / 0.05);

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
`;

type WeatherListPropsTytpe = {
    data: WeatherItemDataType[];
};

const WeatherList = ({ data }: WeatherListPropsTytpe) => {
    return (
        <WeatherListBase>
            {data.map((dailyForeacst: WeatherItemDataType, index) => (
                <WeatherListItem
                    key={`w-l--i${index + 1}`}
                    compact={index !== 0}
                    data={dailyForeacst}
                />
            ))}
        </WeatherListBase>
    );
};

export default WeatherList;
