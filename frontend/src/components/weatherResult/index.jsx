import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import { convert } from '../../utils/kelvinToCelsius'
const WeatherResult = () => {

    const {lat , lon } = useAuth()
    const [now, setNow] = useState()
    const [todayInfos, setTodayInfos] = useState()
    const [tomorrow, setTomorrow] = useState()
    const [afterTomorrow, setAfterTomorrow] = useState()
    
    const fetchWeather = async () => {
        await axios
            .get(process.env.REACT_APP_API_WEATHER, {
                params: {
                    lat,
                    lon,
                    lang: 'pt',
                    exclude: 'minutely,hourly,alerts',
                    appid: process.env.REACT_APP_KEY_WEATHER,
                },
            })
            .then( response => {
                setNow(response.data.current.temp)  
                console.log(response.data.current)
                setTodayInfos(response.data.daily[0])
                setTomorrow(response.data.daily[1].temp.day)
                setAfterTomorrow(response.data.daily[2].temp.day)
            })
    }

    useEffect(() => { 
        if(lat !== null && lon !== null) {
            fetchWeather()
        }
    }, [lat, lon])
    return (
        <div>
            <span>
                Hoje: {now && convert(now)}ºC
            </span> <br />

            <h3>
                {todayInfos && 
                    <div>
                        {todayInfos.weather[0].description} <br />
                         Vento: {todayInfos.humidity}KM/H <br />
                         Humidade: {todayInfos.humidity}% <br />
                         Pressão: {todayInfos.pressure}hPA <br />
                    </div>}
            </h3>

            <span>
                Amanhã: {tomorrow && convert(tomorrow)}ºC
            </span> <br />

            <span>
                Depois de amanhã: {afterTomorrow && convert(afterTomorrow)}ºC
            </span> <br />
            
        </div>
    )
}

export default WeatherResult; 