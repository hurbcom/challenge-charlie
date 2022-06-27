import { useEffect, useState } from 'react'
import { Container } from '../../components/container/styles'
import TextField from '../../components/textField'
import WeatherResult from '../../components/weatherResult'
import directionIcon from '../../assets/directionIcon.svg'
import { Icons, Results, Option } from './styles'
import { useAuth } from '../../context/auth'
import useDebounce from '../../hooks/useDebounce'
import axios from 'axios'

const HomePage = ( ) => {

    const { lat, lon, setLat, setLon } = useAuth()
    const [state, setState] = useState(null)
    const [city, setCity] = useState('Carregando...')
    const [newCity, setNewCity] = useState(city)
    const [control, setControl] = useState(0)
    const [options, setOptions] = useState([])
    const debounce = useDebounce(newCity, 500)

    function CheckObj(data){
        return (typeof(data) === 'object' && data.length > 0)
    }


    useEffect(() => {
        if(control > 0) {
            axios.get(process.env.REACT_APP_API_GEO, {
                params: {
                    q: `${newCity}`,
                    key: process.env.REACT_APP_KEY_GEO,
                },
            }).then(
                response => {
                    if(response.data.results.length > 1) {
                        setOptions(response.data.results)
                        setControl(0)
                    }
                }
            )
        }
    }, [debounce])

    useEffect(() => { 
        if(lat !== null && lon !== null) {
            axios.get(process.env.REACT_APP_API_GEO, {
                params: {
                    q: `${lat}, ${lon}`,
                    key: process.env.REACT_APP_KEY_GEO,
                },
            }).then(
                response => {
                    if(response.data.results[0].components.city !== undefined) {
                        setCity(response.data.results[0].components.city)
                    } else if(response.data.results[0].components.town !== undefined){
                        setCity(response.data.results[0].components.town)
                    }
                    if(response.data.results[0].components.state !== undefined) {
                        setState(response.data.results[0].components.state)
                    }
                }
            )
        }
    }, [lat, lon])


    return (
        <Container>
            <TextField 
                sx={{ m: 1 }}
                id={"input-with-sx"}
                startIcon={<Icons src={directionIcon} />}
                value={(state && `${city}, ${state}`) || (newCity && `${newCity}`)}
                onChange={(event) => {
                    setNewCity(event.target.value)
                    setState(null)
                    setOptions([])
                    setControl(1)
                }}
            />
            {CheckObj(options) &&
                <Results>
                    {options.map((item, index) => {
                        return (
                            <Option key={index} onClick={() => {
                                setLat(item.geometry.lat)
                                setLon(item.geometry.lng)
                                setOptions([])
                            }}>
                                {item.formatted}
                            </Option>
                        )
                    })}
                </Results> 
            }
            <WeatherResult city={city} />
        </Container>
    )
}

export default HomePage