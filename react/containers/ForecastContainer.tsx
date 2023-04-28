import Accordeon from "@components/Accordeon";
import ForecastError from "@components/ForecastError";
import ForecastLoading from "@components/ForecastLoading";
import LocationInput from "@components/LocationInput";
import WeatherInfo from "@components/WeatherInfo";
import ForecastContent from "@components/ForecastContent";
import useGetWeatherForecastData from "@hooks/useWeatherForecastData";
import { initialForecastState } from "@services/getForecast";
import { WeatherData } from "@interfaces/WeatherData";
import React from "react";
import useLocationNameByUserLocation from "@hooks/useLocationNameByUserLocation";

export default function ForecastContainer({
    userLocation,
    hasErrorOnUserLocation,
    isLoadingUserLocation,
}: {
    userLocation: string;
    hasErrorOnUserLocation: boolean;
    isLoadingUserLocation: boolean;
}) {
    const { location, inputText, onBlur, setInputText } =
        useLocationNameByUserLocation(userLocation);

    const { data, isLoading, isError, refetch } =
        useGetWeatherForecastData(location);

    const readyToShow = !isLoading && !isLoadingUserLocation;

    const forecastData =
        hasErrorOnUserLocation && data && data.length < 1
            ? initialForecastState
            : data;

    return (
        <ForecastContent>
            <LocationInput
                value={inputText}
                isLoading={isLoadingUserLocation}
                onBlur={onBlur}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputText(e.target.value);
                }}
            />
            {!readyToShow && <ForecastLoading />}
            
            <ForecastError onClick={() => refetch()} />
            {/* {readyToShow && !isError && (
                <Accordeon
                    tabDataArray={forecastData}
                    renderTab={(data: WeatherData, { isOpen, index }) => (
                        <WeatherInfo
                            {...data}
                            isOpen={isOpen}
                            position={index}
                        />
                    )}
                />
            )} */}
        </ForecastContent>
    );
}
