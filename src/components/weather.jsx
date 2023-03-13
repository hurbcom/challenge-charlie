import SearchBar from "./search-bar";
import WeatherForecastItem from "./weather-forecast-item";
import WeatherForecastList from "./weather-forecast-list";

const Weather = ({ forecast }) => {
    return (
        <div className="max-w-[640px] mx-auto">
            <SearchBar />
            <WeatherForecastList>
                {["Hoje", "Amanhã", "Depois de amanhã"].map((day, i) => (
                    <WeatherForecastItem
                        day={day}
                        index={i}
                        key={`weather_item_${i}`}
                        active={i === 0}
                    />
                ))}
                {forecast &&
                    forecast.map((day, i) => (
                        <WeatherForecastItem
                            day={day}
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
