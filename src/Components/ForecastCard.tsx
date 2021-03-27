import { useCallback, useEffect, useRef, useState } from "react"
import { apiFetch, getCoordinates, fetchUserLocation, fetchForecast, fetchLocations, getTempColor } from "../Utils"
import { REVERSE_GEOCODE, USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import { Card, IconWrapper, ForecastArea, SearchBarArea, DayLabel, InfoArea, Description, StyledWeatherIcon, Value } from "./styled"
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
    const [loadingForecast, setLoadingForecast] = useState<boolean>(true)
    const [searching, setSearching] = useState<boolean>(false)
    const [forecast, setForecast] = useState<any>([])
    const [locations, setLocations] = useState<any>()
    const [selectedLocation, setSelectedLocation] = useState<any | undefined>()
    const [searchString, setSearchString] = useState<string>('')
    const [system, setSystem] = useState<'imperial' | 'metric'>('metric')

    const UNITS_OF_MEASUREMENT = {
        'wind': system === 'metric' ? 'km/h' : 'm/h',
        'pressure': system === 'metric' ? 'hPA' : 'hPA',
        'temperature': system === 'metric' ? `\u00B0C` : 'm/h'
    }

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
            setLoadingForecast(true)
            setSearchString(selectedLocation.formatted)
            const { lat, lng } = selectedLocation.geometry
            fetchForecast(lat, lng).then(forecast => {
                const temperatures = forecast.daily.slice(0, 3)

                setForecast(temperatures)
            })
                .finally(() => setLoadingForecast(false))
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
                    //onBlur={() => setSearching(false)}
                    onChange={e => {
                        onSearchLocation(e.target.value)
                    }}

                />
                <Overlay
                    show={searching}
                    transition={false}
                    target={aearchAreaRef.current}
                    placement="bottom"
                    rootClose
                    rootCloseEvent='mousedown'
                    onHide={(event) => {
                        if (!aearchAreaRef.current.contains(event.target)) {
                            setSearching(false)
                            setSearchString(selectedLocation.formatted)

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
                            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'

                        }}
                        data={getLocationsOptions()}
                        loading={loading}
                        onClickOption={(option: any) => {
                            setSelectedLocation(option)
                            setSearching(false)
                        }}
                    />
                </Overlay>
            </SearchBarArea>
            <ForecastArea
                className='today'
                tempColor={getTempColor(forecast[0]?.temp.max, 60)}
            >
                <div>
                    <Value loading={loadingForecast} style={{ height: '100%', width: '100%' }}>
                        <StyledWeatherIcon iconId={forecast[0]?.weather[0].icon} />
                    </Value>
                </div>
                <div>
                    <div>
                        <Value loading={loadingForecast}>
                            <DayLabel>Hoje</DayLabel>
                            {`${forecast[0]?.temp.max} ${UNITS_OF_MEASUREMENT['temperature']}`}
                        </Value>
                    </div>
                    <InfoArea>
                        <Description>
                            <Value loading={loadingForecast}>
                                {forecast[0]?.weather[0].description}
                            </Value>
                        </Description>
                        <div>
                            <Value loading={loadingForecast}>
                                <span>Vento: </span>
                                {`${forecast[0]?.wind_speed} ${UNITS_OF_MEASUREMENT['wind']} `}
                            </Value>

                        </div>
                        <div>
                            <Value loading={loadingForecast}>
                                <span>Umidade: </span>
                                {`${forecast[0]?.dew_point}%`}
                            </Value>
                        </div>
                        <div>
                            <Value loading={loadingForecast}>
                                <span>Pressão: </span>
                                {`${forecast[0]?.pressure} ${UNITS_OF_MEASUREMENT['pressure']} `}
                            </Value>
                        </div>
                    </InfoArea>
                </div>
            </ForecastArea>
            <ForecastArea
                className='tomorrow'
                tempColor={getTempColor(forecast[0]?.temp.max, 50)}
            >
                <div>
                    <DayLabel>Amanhã</DayLabel>
                    <Value loading={loadingForecast}>
                        {`${forecast[1]?.temp.max} ${UNITS_OF_MEASUREMENT['temperature']}`}
                    </Value>
                </div>
            </ForecastArea>
            <ForecastArea
                className='day-after-tomorrow'
                tempColor={getTempColor(forecast[0]?.temp.max, 40)}
            >
                <div>
                    <DayLabel>Depois de Amanhã</DayLabel>
                    <Value loading={loadingForecast}>
                        {`${forecast[2]?.temp.max} ${UNITS_OF_MEASUREMENT['temperature']}`}
                    </Value>
                </div>
            </ForecastArea>
        </Card >
    )
}

export default ForecastCard