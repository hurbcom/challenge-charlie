import React, { useEffect, useState } from 'react'

import Background from './components/background'
import Modal from './components/modal'
import Searcher from './components/searcher'

import { fetchLocaleByCoord, fetchCoordByLocale } from './services/locale'
import { fetchWeatherDataByLocale } from './services/weather'

import { useGeolocation } from 'beautiful-react-hooks';

const App = () => {
    const [_, { onChange: geolocationOnChange }] = useGeolocation();

    const [currentLocale, setCurrentLocale] = useState('')
    const [currentWeatherData, setCurrentWeatherData] = useState([])


    const getGeolocation = newLocation => {

        if (!newLocation && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords
                getLocale(latitude, longitude)
            })
        } else if (newLocation) {
            getLocale(newLocation.lat, newLocation.lon)
        }
    }

    const getLocale = async (lat, long) => {

        const localeToSet = await fetchLocaleByCoord(lat, long)
        if (localeToSet) {
            setCurrentLocale(localeToSet)
        }
    }

    const getWeaterData = async locale => {
        const data = await fetchWeatherDataByLocale(locale)
        if (data) {
            setCurrentWeatherData(data.data)
        }
    }

    const getNewWeatherData = async locale => {
        /**
         * If the user input the city with the format 'city,state' we just need the city name
         */
        const [localeParsed] = locale.split(',')
        const data = await fetchCoordByLocale(localeParsed)
        getGeolocation(data)
    }


    geolocationOnChange(async () => {
        await getGeolocation()
    })

    useEffect(() => {
        getWeaterData(currentLocale)
    }, [currentLocale])


    return (


        <Background>

            <Modal>
                <Searcher
                    placeholder={currentLocale}
                    defaultPlaceholder="City, State"
                    onSubmit={getNewWeatherData}
                    clearCurrentValue={true}
                />

            </Modal>

        </Background>

    )
}


export default App