import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import { convert } from '../../utils/kelvinConvert'
import { ResultSpace, Labels, Values,
    Today, Tomorrow, AfterTomorrow, 
    Icon, Columns, NotToday
 } from './styles'
import { backgroundColor } from '../../utils/backgroundColor'

const WeatherResult = ({city}) => {

    const {lat , lon} = useAuth()
    const [now, setNow] = useState()
    const [todayInfos, setTodayInfos] = useState(null)
    const [tomorrow, setTomorrow] = useState()
    const [afterTomorrow, setAfterTomorrow] = useState()
    const [color, setColor] = useState('rgba(242, 241, 242, 1)')
    const [colorTomorrow, setColorTomorrow] = useState('rgba(242, 241, 242, 1)')
    const [colorAfterTomorrow, setColorAfterTomorrow] = useState('rgba(242, 241, 242, 1)')
    const [iconImg, setIconImg] = useState('Clear')
    const [temp, setTemp] = useState(true) // true for celsius, false for fahrenheit
    
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
                setColorTomorrow(backgroundColor(convert(response.data.daily[1].temp.day)))
                setColorAfterTomorrow(backgroundColor(convert(response.data.daily[2].temp.day)))
                setIconImg(`${response.data.current.weather[0].main}`)
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

    if(city !== null & city !== undefined & city !== 'Carregando...') {
        return (
            <ResultSpace  style={{background: `${color}`}}>
                <Today style={{background: `${color}`}}>
                    <Columns>
                        <Icon src={require(`../../assets/${iconImg}.svg`)} />
                    </Columns>
                    <Columns second>
                        <Labels column upper>
                            Hoje 
                            <Values onClick={() => setTemp(!temp)} pointer>
                                {now && convert(now, temp)}
                            </Values>
                        </Labels>
                        <Labels>
                            {todayInfos.weather[0].description} <br />
                        </Labels>
                        {todayInfos && 
                            <Labels>
                                <Values>
                                Vento: {todayInfos.humidity}KM/H <br />
                                Humidade: {todayInfos.humidity}% <br />
                                Pressão: {todayInfos.pressure}hPA <br />
                                </Values>
                            </Labels>}
                    </Columns>
                </Today>
                <NotToday>
                    <Tomorrow style={{background: `${colorTomorrow}`}}>
                        <Labels notToday upper column>
                            Amanhã
                            <Values onClick={() => setTemp(!temp)} pointer big>
                                {tomorrow && convert(tomorrow, temp)}
                            </Values>
                        </Labels>
                    </Tomorrow> 
        
                    <AfterTomorrow  style={{background: `${colorAfterTomorrow}`}}>
                        <Labels  notToday upper column>
                            Depois de amanhã 
                            <Values  onClick={() => setTemp(!temp)} pointer big>
                                {afterTomorrow && convert(afterTomorrow, temp)}
                            </Values>
                        </Labels>
                    </AfterTomorrow>
                </NotToday>
            </ResultSpace>
        )
    }
}

export default WeatherResult; 