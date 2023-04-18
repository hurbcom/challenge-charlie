import { FormEvent, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import AppHeader from "components/AppHeader";
import WeatherList from "components/WeatherList";
import useDailyForecast from "hooks/useDailyForecast";
import { AppCoordinatesType } from "hooks/useGeocode";

const WeatherApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 100%;

    & > * {
        max-width: 340px;
        width: 100%;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    position: absolute;
    bottom: 0;
`;

export const Weather = () => {
    const [search, setSearch] = useState<AppCoordinatesType>(
        {} as AppCoordinatesType
    );

    const { forecast, error, loadForecast } = useDailyForecast();

    const handleChange = (coords: AppCoordinatesType) => {
        setSearch(coords);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            if (search.latitude && search.longitude) loadForecast(search);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [search, search]);

    return (
        <WeatherApp>
            <AppHeader onChange={handleChange} />
            {forecast ? <WeatherList data={forecast} /> : null}
            {error ? <Error>{error}</Error> : null}
        </WeatherApp>
    );
};

export default Weather;
