import { useEffect, useState } from 'react'
import { Container } from '../../components/container/styles'
import TextField from '../../components/textField'
import WeatherResult from '../../components/weatherResult'
import directionIcon from '../../assets/44.svg'
import { Icons } from './styles'
import { useAuth } from '../../context/auth'
import axios from 'axios'
import { Select } from '@mui/material'

const HomePage = ( ) => {

    const { lat, lon } = useAuth()
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [select, setSelect] = useState(false)


    function handleChange(event){
        setCity(event)
        setTimeout(() => {
            axios.get(process.env.REACT_APP_API_GEO, {
                params: {
                    q: `${event}`,
                    key: process.env.REACT_APP_KEY_GEO,
                },
            }).then(
                response => {
                    console.log(response.data.results)
                    if(response.data.results.length > 1) {
                        setSelect(true)
                    }
                }
            )
        }, 1000)
    }

    useEffect(() => { 
        if(lat !== null && lon !== null) {
            axios.get(process.env.REACT_APP_API_GEO, {
                params: {
                    q: `${lat}, ${lon}`,
                    key: process.env.REACT_APP_KEY_GEO,
                },
            }).then(
                response => {
                    setState(response.data.results[0].components.state)
                    setCity(response.data.results[0].components.city)
                }
            )
        }
    }, [lat, lon])


    return (
        <Container>
            <TextField 
                id={"input-with-sx"}
                startIcon={<Icons src={directionIcon}/>}
                defaultValue={'Carregando...'}
                value={(state && `${city}, ${state}`) || (city && `${city}`)}
                onChange={(event) => {
                    handleChange(event.target.value)
                    setState(null)
                }}
            />
            <WeatherResult />
        </Container>
    )
}

export default HomePage