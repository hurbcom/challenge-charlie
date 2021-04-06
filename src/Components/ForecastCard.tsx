import { useCallback, useEffect, useRef, useState } from "react"
import { RiCompassLine } from 'react-icons/ri'
import Overlay from 'react-bootstrap/Overlay'

import { IForecastState, ISystemState } from "../types"
import { IForecast, ILocationResult } from "../types/api-types"
import { getCoordinates, fetchUserLocation, fetchForecast, fetchLocations, getTempColor, getWindDirection, getUnit, formatTemperature, convertWindSpeed } from "../Utils"

import { Card, IconWrapper, ForecastArea, SearchBarArea, DayLabel, Description, StyledWeatherIcon, StyledSection, Temperature } from "./styled"
import DropDownMenu from "./DropDownMenu"

const defaultSystem: ISystemState = 'metric'

function ForecastCard() {
    const searchAreaRef = useRef<HTMLDivElement>(null);
    const timeout = useRef<number>()
    const currentString = useRef<string>('')

    const [initialLoading, setInitialLoading] = useState<boolean>(false)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [loadingOptions, setLoadingOptions] = useState<boolean>(false)
    const [loadingForecast, setLoadingForecast] = useState<boolean>(false)
    const [searchString, setSearchString] = useState<string>('')
    const [forecast, setForecast] = useState<IForecastState | null>(null)
    const [locations, setLocations] = useState<ILocationResult[]>()
    const [selectedLocation, setSelectedLocation] = useState<ILocationResult | undefined>()
    const [system, setSystem] = useState<ISystemState>(defaultSystem)

    useEffect(() => {
        if (navigator.geolocation) {
            setInitialLoading(true)
            getCoordinates().then(position => {
                const { latitude, longitude } = position.coords

                return fetchUserLocation(latitude, longitude).then(location => {
                    if (location) {
                        setSearchString(location.formatted)
                        setSelectedLocation(location)
                        return fetchForecast(latitude, longitude, defaultSystem)
                            .then(forecast => {
                                setForecast(formatForecastState(forecast))
                            })
                    }
                })
            })
                .catch(err => console.log(err))
                .finally(() => setInitialLoading(false))
        }
    }, [])

    const getLocationsOptions = useCallback(() => {
        if (locations) {
            return locations.map((location, index: number) => ({ value: location.formatted, id: index, ...location }))
        } else {
            return []
        }
    }, [locations])

    function formatForecastState(forecast: IForecast): IForecastState {
        return (
            {
                'today': forecast.current,
                'tomorrow': forecast.daily[1],
                'afterTomorrow': forecast.daily[2]
            }
        )
    }

    function switchSystem(system: ISystemState) {
        if (selectedLocation) {
            const newSystem = system === 'metric' ? 'imperial' : 'metric'
            const { lat, lng } = selectedLocation.geometry

            setLoadingForecast(true)

            fetchForecast(lat, lng, newSystem)
                .then(forecast => {
                    setForecast(formatForecastState(forecast))
                    setSystem(newSystem)
                    setLoadingForecast(false)
                })
        }
    }

    function onSearchLocation(query: string) {
        setSearchString(query)
        clearTimeout(timeout.current);
        timeout.current = window.setTimeout(() => {
            currentString.current = query
            setLoadingOptions(true)
            fetchLocations(query)
                .then(locations => {
                    if (currentString.current === query) {
                        setLoadingOptions(false)
                        setLocations(locations.results)
                    }
                }).catch(err => console.log(err))
        }, 300);
    }

    return (
        <Card loadingElement={loadingForecast}>
            <SearchBarArea ref={searchAreaRef}>
                <IconWrapper>
                    <RiCompassLine />
                </IconWrapper>
                <input
                    readOnly={loadingForecast}
                    type="text"
                    value={searchString}
                    onFocus={(e) => {
                        e.target.select()
                        setIsSearching(true)
                    }}
                    onChange={e => {
                        onSearchLocation(e.target.value)
                    }}
                />
                <Overlay
                    show={isSearching && !loadingForecast}
                    transition={false}
                    target={searchAreaRef.current}
                    placement="bottom"
                    rootClose
                    rootCloseEvent='mousedown'
                    onHide={(event) => {
                        if (searchAreaRef.current && !searchAreaRef.current.contains(event.target as Node)) {
                            setIsSearching(false)
                            if (selectedLocation) {
                                setSearchString(selectedLocation.formatted)
                            }
                        }
                    }}
                >
                    <DropDownMenu
                        loading={loadingOptions}
                        data={getLocationsOptions()}
                        onClickOption={(location) => {
                            const { lat, lng } = location.geometry

                            setIsSearching(false)
                            setLoadingForecast(true)
                            setSearchString(location.formatted)
                            setSelectedLocation(location)

                            fetchForecast(lat, lng, system)
                                .then(forecast => {
                                    setForecast(formatForecastState(forecast))
                                })
                                .catch(err => console.log(err))
                                .finally(() => setLoadingForecast(false))
                        }}
                    />
                </Overlay>
            </SearchBarArea>
            <ForecastArea
                initialLoading={initialLoading}
                className='today'
                tempColor={getTempColor(forecast?.today.temp, 60, system)}
            >
                <Section show={!!forecast}>
                    <StyledWeatherIcon iconId={forecast?.today.weather[0].icon} />
                </Section>
                <Section show={!!forecast}>
                    <DayLabel>Hoje</DayLabel>
                    <Temperature onClick={() => switchSystem(system)}>
                        {formatTemperature(forecast?.today.temp, system)}
                    </Temperature>
                    <Description>
                        {forecast?.today.weather[0].description}
                    </Description>
                    <div>
                        <span>Vento: </span>
                        {`${getWindDirection(forecast?.today.wind_deg)} ${convertWindSpeed(forecast?.today.wind_speed, system)} ${getUnit('wind', system)}`}
                    </div>
                    <div>
                        <span>Umidade: </span>
                        {`${forecast?.today.humidity} %`}
                    </div>
                    <div>
                        <span>Pressão: </span>
                        {`${forecast?.today.pressure} ${getUnit('pressure', system)} `}
                    </div>
                </Section>
            </ForecastArea>
            <ForecastArea
                initialLoading={initialLoading}
                className='tomorrow'
                tempColor={getTempColor(forecast?.today.temp, 50, system)}
            >
                <Section show={!!forecast}>
                    <DayLabel>Amanhã</DayLabel>
                    <Temperature onClick={() => switchSystem(system)}>
                        {formatTemperature(forecast?.tomorrow?.temp.max, system)}
                        {` / ${formatTemperature(forecast?.tomorrow?.temp.min, system)}`}
                    </Temperature>
                </Section>
            </ForecastArea>
            <ForecastArea
                initialLoading={initialLoading}
                className='day-after-tomorrow'
                tempColor={getTempColor(forecast?.today.temp, 40, system)}
            >
                <Section show={!!forecast}>
                    <DayLabel>Depois de Amanhã</DayLabel>
                    <Temperature onClick={() => switchSystem(system)}>
                        {formatTemperature(forecast?.afterTomorrow?.temp.max, system)}
                        {` / ${formatTemperature(forecast?.afterTomorrow?.temp.min, system)}`}
                    </Temperature>
                </Section>
            </ForecastArea>
        </Card >
    )
}

function Section({ show, children }: any) {
    return show ? (
        <StyledSection>
            {children}
        </StyledSection>
    ) : null
}

export default ForecastCard