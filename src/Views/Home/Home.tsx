import React, { useEffect, useContext, useState } from 'react'
import { getWallpaper } from '../../services/BingWallpaper'
import { WeatherContext } from '../../contexts/WeatherContext'
import { HomeContainer, HomeWeatherContainer } from './Home.styles'
import InputForm from '../../componentes/Input/input'



function Home() {

    const { backgroundImage, setBackgroundImage, location, setLocation } = useContext(WeatherContext)


    useEffect(() => {
        getWallpaper().then((resp) => {
            setBackgroundImage(`https://bing.com${resp.data.images[0].url}`)
        })

        getLocation()
    }, [])

    const getLocation = async () => {
        return navigator.geolocation.getCurrentPosition(function (position) {
            getCordinates(position.coords.latitude, position.coords.longitude)
        })
    }

    const getCordinates = (lat: number, long: number) => {
        return setLocation({ lat, long })
    }

    return (
        <>
            <HomeContainer backgroundImage={backgroundImage}>
                {location ? (<p>{location.lat}</p>) : (<p></p>)}
                <HomeWeatherContainer>
                    <InputForm
                        type="text"
                        placeholder="Escolha a cidade" value={undefined} onChange={undefined} onBlur={undefined} error={undefined} ></InputForm>
                </HomeWeatherContainer>
            </HomeContainer>
        </>)
}


export { Home }

