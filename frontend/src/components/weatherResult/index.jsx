import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import { convert } from '../../utils/kelvinToCelsius'
import { ResultSpace, Labels, Values,
    Today, Tomorrow, AfterTomorrow, 
    Icon
 } from './styles'
import { backgroundColor } from '../../utils/backgroundColor'
import Clear from '../../assets/Clear.svg'
import Clouds from '../../assets/44.svg'
import Thunderstorm from '../../assets/44.svg'
import Drizzle from '../../assets/44.svg'
import Rain from '../../assets/44.svg'

const WeatherResult = ({city}) => {

    const {lat , lon} = useAuth()
    const [now, setNow] = useState()
    const [todayInfos, setTodayInfos] = useState(null)
    const [tomorrow, setTomorrow] = useState()
    const [afterTomorrow, setAfterTomorrow] = useState()
    const [color, setColor] = useState('rgba(242, 241, 242, 1)')
    const [iconImg, setIconImg] = useState('Clear')
    const [temp, setTemp] = useState(1.8*now + 32)
    
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
                setColor(backgroundColor(convert(response.data.current.temp)))
                console.log(response.data.current.weather[0].main)
                setIconImg(`${response.data.current.weather[0].main}`)
                setTodayInfos(response.data.daily[0])
                setTomorrow(response.data.daily[1].temp.day)
                setAfterTomorrow(response.data.daily[2].temp.day)
            })
    }

    console.log(iconImg)

    useEffect(() => { 
        if(lat !== null && lon !== null) {
            fetchWeather()
        }
    }, [lat, lon])

    if(city !== null & city !== undefined & city !== 'Carregando...') {
        return (
            <ResultSpace style={{background: `${color}`}}>
                <Today>
                   <Icon src={require(`../../assets/${iconImg}.svg`)} />
                    <Labels column upper>
                        Hoje 
                        <Values>
                            {now && convert(now)}ºC
                        </Values>
                    </Labels>
                    {todayInfos && 
                        <Labels>
                            <Values>
                            {todayInfos.weather[0].description} <br />
                             Vento: {todayInfos.humidity}KM/H <br />
                             Humidade: {todayInfos.humidity}% <br />
                             Pressão: {todayInfos.pressure}hPA <br />
                            </Values>
                        </Labels>}
                </Today>
                <Tomorrow>
                    Amanhã: {tomorrow && convert(tomorrow)}ºC
                </Tomorrow> 
    
                <AfterTomorrow>
                    Depois de amanhã: {afterTomorrow && convert(afterTomorrow)}ºC
                </AfterTomorrow> <br />
                
            </ResultSpace>
        )
    }
}

export default WeatherResult; 