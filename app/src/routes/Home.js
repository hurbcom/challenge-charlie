import React, { useEffect, useState } from 'react'
import WheatherService from '../services/WheatherService'
import GeoService from '../services/GeoService'
import ImageService from '../services/ImageService'
import Weather from '../components/Weather'
import './styles/main.sass'
import loading from '../statics/images/loading.svg'

function Home({ location }) {

    const [image, setImage] = useState('')
    const [weather, setWeather] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isCelsius, setIsCelcius] = useState(true)
    const [currentLocation, setCurrentLocation] = useState(null)

    const fetchWheather = async ({ latitude, longitude }) => {
        setIsLoading(true)
        try {
            const { results } = await new GeoService().getLocation(latitude, longitude)
            const weather = await fetchLocation(results[0].components.city)
            const image = await new ImageService().getImage()
            setWeather(weather)
            setImage(image)
            setCurrentLocation(results[0].components.city)
        } catch (error) {
            console.log(error)
        }

        setIsLoading(false)
    }

    const fetchLocation = async (location, units = 'metric') => {
        try {
            const response = await new WheatherService().getWheather(location, units)
            return Promise.resolve(response)

        } catch (error) {
            Promise.reject(error)
        }
    }

    const handleChange = async (location, units='metric') => {
        try {
            setIsLoading(true)
            setCurrentLocation(location)
            const weather = await fetchLocation(location, units)
            if (!weather) {
                setIsLoading(false)
                return
            }
            setWeather(weather)
        } catch (error) {
            console.log(error)
        }

        setIsLoading(false)
    }

    const onchangeTemperature = () => {
        handleChange(currentLocation, isCelsius ? 'imperial': 'metric')
        setIsCelcius(!isCelsius)
    }

    useEffect(() => {
        fetchWheather(location.state)
    }, [])

    return (
        <>
        {isLoading && (
            <div className="container-loading">
                <div>
                    <img className="loading" alt="carregando" src={loading} />
                    <p>Searching location...</p>
                </div>
            </div>
        )}
        <div
            className="container-home"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {weather && (
                <Weather
                    weather={weather}
                    onSearch={handleChange}
                    onchangeTemperature={onchangeTemperature}
                    isCelsius={isCelsius}
                />
            )}
        </div>
        </>
    )
}

export default Home
