import { useEffect, useState } from "react"
import { apiFetch, getCoordinates } from "../Utils"
import { USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import SearchBar from "./SearchBar"
import { Card } from "./styled"

function ForecastCard() {
    const [selectedCity, setSelectedCity] = useState<string | undefined>()
    const [searchString, setSearchString] = useState<string>('')

    async function getUsersCityName(): Promise<string | undefined> {
        let cityName: string | undefined = undefined
        if ('geolocation' in navigator) {
            try {
                const position = await getCoordinates()
                const { latitude, longitude } = position.coords

                const data = await apiFetch(USER_LOCATION(latitude, longitude))
                    .get()
                    .then(res => res.json())

                cityName = data.results[0].components.city

            } catch (error) {
                console.log(error)
            }
        }
        return cityName
    }

    function fetchForecast(query: string) {
        apiFetch(WEATHER_FORECAST(query))
            .get()
            .then(res => res.json())
            .then(forecast => {
                //setSelectedCity()
                console.log(forecast)
            })
    }

    useEffect(() => {
        getUsersCityName().then(cityName => {
            if (cityName) {
                fetchForecast(cityName)
            }
        })
    }, [])


    return (
        <Card>
            <SearchBar
                onSearch={(searchString: any) => {
                    fetchForecast(searchString)
                }}
            />
        </Card>
    )
}

export default ForecastCard