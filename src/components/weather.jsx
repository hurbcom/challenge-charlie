import { WeatherContext } from "@/utils/weather-context";
import { useContext, useEffect } from "react";
import SearchBar from "./search-bar";
import WeatherForecastItem from "./weather-forecast-item";
import WeatherForecastList from "./weather-forecast-list";

const Weather = () => {
    const { forecast, loading } = useContext(WeatherContext);

    useEffect(() => {
        console.log("forecast:", forecast);
    }, [forecast]);

    return (
        <div className="max-w-[640px] mx-auto">
            <SearchBar />
            <WeatherForecastList>
                {/* {["Hoje", "Amanhã", "Depois de amanhã"].map((day, i) => (
                    <WeatherForecastItem
                        day={day}
                        index={i}
                        key={`weather_item_${i}`}
                        active={i === 0}
                    />
                ))} */}
                {forecast &&
                    forecast.map((data, i) => (
                        <WeatherForecastItem
                            data={data}
                            loading={loading}
                            index={i}
                            key={`weather_item_${i}`}
                            active={i === 0}
                        />
                    ))}
            </WeatherForecastList>
        </div>
    );
};

export default Weather;
