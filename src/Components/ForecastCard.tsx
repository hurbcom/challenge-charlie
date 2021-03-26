import { useCallback, useEffect, useRef, useState } from "react"
import { apiFetch, getCoordinates, fetchUserLocation, fetchForecast, fetchLocations, getTempColor } from "../Utils"
import { REVERSE_GEOCODE, USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import { Card, IconWrapper, ForecastArea, SearchBarArea } from "./styled"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import DropDownMenu from "./DropDownMenu"
import { RiCompassLine } from 'react-icons/ri'
import WeatherIcon from "../Icons/WeatherIcon";

let currentString: string = ''
let timeout: any

function ForecastCard() {
    const aearchAreaRef = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [searching, setSearching] = useState<boolean>(false)
    const [forecast, setForecast] = useState<any>([])
    const [locations, setLocations] = useState<any>()
    const [selectedLocation, setSelectedLocation] = useState<any | undefined>()
    const [searchString, setSearchString] = useState<string>('')

    useEffect(() => {
        getCoordinates().then(position => {
            const { latitude, longitude } = position.coords

            fetchUserLocation(latitude, longitude).then(location => {
                if (location) {
                    setSelectedLocation(location)
                }
            })
        })
    }, [])

    useEffect(() => {
        if (selectedLocation) {
            setSearchString(selectedLocation.formatted)
            const { lat, lng } = selectedLocation.geometry
            fetchForecast(lat, lng).then(forecast => {
                const temperatures = forecast.daily.slice(0, 3)

                setForecast(temperatures)
            })
        }
    }, [selectedLocation])

    const getLocationsOptions = useCallback(() => {
        if (locations?.results) {
            return locations.results.map((location: any, index: number) => ({ value: location.formatted, id: index, ...location }))
        } else {
            return []
        }
    }, [locations])

    function onSearchLocation(query: string) {
        setSearchString(query)
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            currentString = query
            setLoading(true)
            fetchLocations(query)
                .then(locations => {
                    if (currentString === query) {
                        setLoading(false)
                        setLocations(locations)
                    }
                })
        }, 300);
    }

    return (
        <Card>
            <SearchBarArea ref={aearchAreaRef}>
                <IconWrapper>
                    <RiCompassLine />
                </IconWrapper>
                <input
                    type="text"
                    value={searchString}
                    onFocus={(e) => {
                        e.target.select()
                        setSearching(true)
                    }}
                    onBlur={() => setSearching(false)}
                    onChange={e => {
                        onSearchLocation(e.target.value)
                    }}

                />
                <Overlay
                    show={searching && searchString.length > 1}
                    target={aearchAreaRef.current}
                    placement="bottom"
                    rootClose
                    rootCloseEvent='mousedown'
                    onHide={(event) => {
                        if (!aearchAreaRef.current.contains(event.target)) {
                            setSearching(false)
                        }
                    }}
                >
                    <DropDownMenu
                        style={{
                            zIndex: 99,
                            positions: 'relative',
                            margin: '0 auto',
                            width: '65%',
                            backgroundColor: 'rgba(43, 50, 82, 0.85)',
                            padding: '30px 20px',
                            color: 'white',
                            borderRadius: 5,
                        }}
                        data={getLocationsOptions()}
                        loading={loading}
                        onClickOption={(option: any) => {
                            setSelectedLocation(option)
                        }}
                    />
                </Overlay>
            </SearchBarArea>
            <ForecastArea
                className='today'
                tempColor={getTempColor(forecast[0]?.temp.max)}
            >
                <div>
                    <WeatherIcon iconId={forecast[0]?.weather[0].icon} />
                </div>
                <div>
                    {forecast[0]?.temp.max}
                    {forecast[0]?.weather[0].description}
                    {forecast[0]?.wind_speed}
                    {forecast[0]?.pressure}
                </div>
            </ForecastArea>
            <ForecastArea
                className='tomorrow'
                tempColor={getTempColor(forecast[1]?.temp.max)}
            >
                <div>
                    {forecast[1]?.temp.max}
                    {forecast[1]?.weather[0].description}
                </div>
            </ForecastArea>
            <ForecastArea
                className='day-after-tomorrow'
                tempColor={getTempColor(forecast[2]?.temp.max)}
            >
                <div>
                    {forecast[2]?.temp.max}
                    {forecast[2]?.weather[0].description}
                </div>
            </ForecastArea>
        </Card >
    )
}

export default ForecastCard