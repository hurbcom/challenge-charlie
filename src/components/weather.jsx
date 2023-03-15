import { WeatherContext } from "@/utils/weather-context";
import { useCallback, useContext, useEffect, useState } from "react";
import SearchBar from "./search-bar";
import WeatherForecastItem from "./weather-forecast-item";
import WeatherForecastList from "./weather-forecast-list";

const Weather = () => {
    const { forecast, loading } = useContext(WeatherContext);
    const [unit, setUnit] = useState("metric");

    const handleToggleUnit = useCallback(() => {
        if (unit === "metric") {
            setUnit("imperial");
        } else {
            setUnit("metric");
        }
    }, [unit]);

    return (
        <div className="max-w-[572px] mx-auto">
            <SearchBar />
            <WeatherForecastList>
                {forecast &&
                    forecast.map((data, i) => (
                        <WeatherForecastItem
                            data={data}
                            loading={loading}
                            index={i}
                            key={`weather_item_${i}`}
                            active={i === 0}
                            unit={unit}
                            handleToggleUnit={handleToggleUnit}
                        />
                    ))}
            </WeatherForecastList>
        </div>
    );
};

export default Weather;
