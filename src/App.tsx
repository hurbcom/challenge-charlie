import React from "react";
import "./App.css";
import { getBingApi } from "./utils/bing";
import {
    WeatherData,
    getLatLong,
    getOpenCageApi,
    getOpenWeatherToday,
    getOpenWeatherTemperature,
} from "./utils/forecast";
import { increaseDay } from "./utils/other";
import { Panel } from "./components/panel";

/** Store weather data */
interface Infos {
    todaysForecast: WeatherData;
    tomorrowsDate: Date;
    tomorrowsTemp: number;
    theDayAfterTomorrowDate: Date;
    theDayAfterTomorrowTemp: number;
}

/** Main application page */
function App() {
    const [info, setInfo] = React.useState<Infos | null>(null);
    const [local, setLocal] = React.useState<string>("");
    const [bingImage, setBingImage] = React.useState<string>("");

    const handleLocalizationChange = (newLocalization: string) => {
        setLocal(newLocalization);
    };
    React.useEffect(() => {
        async function init() {
            try {
                let backgroundUrl = await getBingApi();
                setBingImage(backgroundUrl);
            } catch (error) {
                console.error("Error getting bing image!", error);
            }
            try {
                const latLong = await getLatLong();
                const lat = latLong.coords.latitude;
                const long = latLong.coords.longitude;

                const localization = await getOpenCageApi(lat, long);
                setLocal(localization);
            } catch (error) {
                console.error("User denied permission!", error);
            }
        }
        init();
    }, []);
    React.useEffect(() => {
        async function fetchData() {
            try {
                if (local == "") {
                    throw new Error("Location not informed!");
                }
                const todaysForecast = await getOpenWeatherToday(local);
                if (todaysForecast.icon == "?") {
                    throw new Error("Invalid location!");
                }
                const tomorrowsDate = increaseDay(todaysForecast.date);
                const tomorrowsTemp = await getOpenWeatherTemperature(
                    local,
                    tomorrowsDate
                );

                const theDayAfterTomorrowDate = increaseDay(tomorrowsDate);
                const theDayAfterTomorrowTemp = await getOpenWeatherTemperature(
                    local,
                    theDayAfterTomorrowDate
                );
                setInfo({
                    todaysForecast,
                    tomorrowsDate,
                    tomorrowsTemp,
                    theDayAfterTomorrowDate,
                    theDayAfterTomorrowTemp,
                });
            } catch (error) {
                setInfo(null);
                console.error("Error getting forecast!", error);
            }
        }

        fetchData();
    }, [local]);
    return (
        <div className="App" style={{ background: `url(${bingImage})` }}>
            <Panel
                data={
                    info
                        ? {
                              localization: local,
                              status: info.todaysForecast.status,
                              icon: info.todaysForecast.icon,
                              temp: info.todaysForecast.tempToday,
                              wind: info.todaysForecast.wind,
                              humidity: info.todaysForecast.humidity,
                              pressure: info.todaysForecast.pressure,
                              tomorrowTemp: info.tomorrowsTemp,
                              theDayAfterTomorrowTemp:
                                  info.theDayAfterTomorrowTemp,
                          }
                        : null
                }
                onLocalizationChange={handleLocalizationChange}
            />
        </div>
    );
}

export default App;
