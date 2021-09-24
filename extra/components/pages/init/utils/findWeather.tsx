//Interface
import {FindWeatherInterface} from "../../../../interfaces/findWeather";

export function FindWeather({weather,unitInit,setToday,setTomorrow,setAfterTomorrow}:FindWeatherInterface){
    if(weather.length > 0){
        setToday({
            temp: weather[0].main.temp,
            id: weather[0].weather[0].id,
            description: weather[0].weather[0].description,
            unit: unitInit,
            windDeg: weather[0].wind.deg,
            windSpeed: weather[0].wind.speed,
            humidity: weather[0].main.humidity,
            pressure: weather[0].main.pressure
        })
        const todayDate = new Date().getDate();
        weather.map(function(item:any) {
            const itemDate = new Date(item.dt_txt).getDate();
            if( itemDate === parseInt(String(todayDate)) + 1){
                setTomorrow({
                    temp: item.main.temp,
                    unit: unitInit
                });
            }
            if( itemDate === parseInt(String(todayDate)) + 2){
                setAfterTomorrow({
                    temp: item.main.temp,
                    unit: unitInit
                });
            }
        });
    }
}