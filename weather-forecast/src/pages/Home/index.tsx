import React from "react";
import { HomeView } from "./HomeView";
import { useHomeViewModel } from "./useHomeViewModel";

export const Home = () => {
    const {
        afterTomorrow,
        error,
        handleInputChange,
        handleKeyDown,
        humidity,
        icon,
        inputValue,
        isCelsius,
        loading,
        pressure,
        temperature,
        afterTomorrowColor,
        todayColor,
        tomorrowColor,
        toggleTemperatureUnit,
        tomorrow,
        weather,
        wind,
    } = useHomeViewModel();
    return (
        <HomeView
            afterTomorrow={afterTomorrow}
            afterTomorrowColor={afterTomorrowColor}
            error={error}
            handleInputChange={handleInputChange}
            handleKeyDown={handleKeyDown}
            humidity={humidity}
            icon={icon}
            inputValue={inputValue}
            isCelsius={isCelsius}
            loading={loading}
            pressure={pressure}
            temperature={temperature}
            todayColor={todayColor}
            toggleTemperatureUnit={toggleTemperatureUnit}
            tomorrow={tomorrow}
            tomorrowColor={tomorrowColor}
            weather={weather}
            wind={wind}
        />
    );
};
