import React, { useEffect, useContext, useState } from 'react'
import { getWallpaper } from '../../services/BingWallpaper'
import { getLocation } from '../../services/OpenCage'
import { WeatherContext } from '../../contexts/WeatherContext'
import { HomeContainer, HomeWeatherContainer } from './Home.styles'
import InputForm from '../../componentes/Input/input'



function Home() {

    const { backgroundImage, setBackgroundImage, location, setLocation } = useContext(WeatherContext)


    useEffect(() => {
        getWallpaper().then((resp) => {
            setBackgroundImage(`https://bing.com${resp.images[0].url}`)
        })
        getUserLocation()

    }, [])

    const getUserLocation = () => {
        try {
            navigator.geolocation.getCurrentPosition(async (result) => {
                try {
                    const response = await getLocation(result.coords.latitude, result.coords.longitude)

                } catch (error) {
                    console.log(error);

                }
            })
        } catch (error) {
            console.error(error)
        }

        return navigator.geolocation.getCurrentPosition(async function (position) {
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

