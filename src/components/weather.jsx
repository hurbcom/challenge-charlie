import SearchBar from "./search-bar";
import WeatherForecastItem from "./weather-forecast-item";
import WeatherForecastList from "./weather-forecast-list";

const Weather = () => {
    return (
        <div className="max-w-[640px] mx-auto">
            <SearchBar />
            <WeatherForecastList>
                {["Hoje", "Amanha", "Depois de amanha"].map((day, i) => (
                    <WeatherForecastItem
                        day={day}
                        index={i}
                        key={`weather_item_${i}`}
                    />
                ))}
            </WeatherForecastList>
        </div>
    );
};

export default Weather;
