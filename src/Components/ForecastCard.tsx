import { useEffect, useState } from "react"
import SvgIcons from "../Icons/SvgIcons"
import { apiFetch, getCoordinates, getUsersCityName } from "../Utils"
import { USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import SearchBar from "./SearchBar"
import { Card, SearchBarArea } from "./styled"

function ForecastCard() {
    const [selectedCity, setSelectedCity] = useState<string | undefined>()
    const [searchString, setSearchString] = useState<string>('')
    const TEMP_COLOR = '#ffd500'


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
            <SearchBarArea>
                <SvgIcons.Compass />
                <SearchBar
                    onSearch={(searchString: any) => {
                        fetchForecast(searchString)
                    }}
                />
            </SearchBarArea>
            <div className='main' style={{ flexGrow: 1, backgroundColor: `${TEMP_COLOR}7F` }}>
            </div>
            <div className='tomorrow' style={{ height: '15%', backgroundColor: `${TEMP_COLOR}CC` }}>
            </div>
            <div className='day-after-tomorrow' style={{ height: '15%', backgroundColor: `${TEMP_COLOR}AA` }}>
            </div>
        </Card>
    )
}

export default ForecastCard