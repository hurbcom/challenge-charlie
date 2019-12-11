import React, { useEffect, useState } from 'react'
import WheatherService from '../services/WheatherService'
import GeoService from '../services/GeoService'
import ImageService from '../services/ImageService'
import Weather from '../components/Weather'
import './styles/main.sass'

function Home({ location }) {

    const [image, setImage] = useState('')
    const [weather, setWeather] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchWheather = async ({ latitude, longitude }) => {
        setIsLoading(true)
        try {
            const { results } = await new GeoService().getLocation(latitude, longitude)
            const weather = await fetchLocation(results[0].components.city)
            const image = await new ImageService().getImage()
            setWeather(weather)
            setImage(image)
        } catch (error) {
            console.log(error)
        }

        setIsLoading(false)
    }

    const fetchLocation = async (location) => {
        try {
            const response = await new WheatherService().getWheather(location)
            return Promise.resolve(response)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeInput = async (location) => {
        setIsLoading(true)
        const weather = await fetchLocation(location)
        setIsLoading(false)
        setWeather(weather)
    }

    useEffect(() => {
        fetchWheather(location.state)
    }, [])


    return (
        <div
            className="container-home"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {!isLoading && weather && (
                <Weather
                    weather={weather}
                    onSearch={handleChangeInput}
                />
            )}
        </div>
    )
}

export default Home
