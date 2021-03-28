import { useCallback, useEffect, useRef, useState } from "react"
import { getCoordinates, fetchUserLocation, fetchForecast, fetchLocations, getTempColor, getWindDirection, getUnit } from "../Utils"
import { Card, IconWrapper, ForecastArea, SearchBarArea, DayLabel, Description, StyledWeatherIcon, Block, Section, Temperature } from "./styled"
import Overlay from 'react-bootstrap/Overlay'
import { RiCompassLine } from 'react-icons/ri'
import DropDownMenu from "./DropDownMenu"

let currentString: string = ''
let timeout: any

function ForecastCard() {
    const searchAreaRef = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [initialLoading, setInitialLoading] = useState<boolean>(true)
    const [loadingForecast, setLoadingForecast] = useState<boolean>(false)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [forecast, setForecast] = useState<any>({})
    const [locations, setLocations] = useState<any>()
    const [selectedLocation, setSelectedLocation] = useState<any | undefined>()
    const [searchString, setSearchString] = useState<string>('')
    const [system, setSystem] = useState<'imperial' | 'metric'>('metric')

    const { today, tomorrow, afterTomorrow } = forecast

    useEffect(() => {
        getCoordinates().then(position => {
            const { latitude, longitude } = position.coords

            fetchUserLocation(latitude, longitude).then(location => {
                if (location) {
                    setSearchString(location.formatted)
                    setSelectedLocation(location)
                    fetchForecast(latitude, longitude, system)
                        .then(forecast => {
                            setForecast(parseForecastData(forecast))
                        })
                        .finally(() => setInitialLoading(false))
                }
            })
        })
    }, [])

    const getLocationsOptions = useCallback(() => {
        if (locations?.results) {
            return locations.results.map((location: any, index: number) => ({ value: location.formatted, id: index, ...location }))
        } else {
            return []
        }
    }, [locations])

    function parseForecastData(forecast: any) {
        return (
            {
                'today': forecast.current,
                'tomorrow': forecast.daily[1],
                'afterTomorrow': forecast.daily[2]
            }
        )
    }

    function switchSystem() {
        const newSystem = system === 'metric' ? 'imperial' : 'metric'
        const { lat, lng } = selectedLocation.geometry

        setLoadingForecast(true)

        fetchForecast(lat, lng, newSystem)
            .then(forecast => {
                setForecast(parseForecastData(forecast))
                setSystem(newSystem)
                setLoadingForecast(false)
            })
    }

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

    function formatTemperature(temp: number) {
        if (temp) {
            return `${temp.toFixed()} ${getUnit('temperature', system)}`
        } else {
            return ''
        }
    }

    return (
        <Card loadingElement={loadingForecast}>
            <SearchBarArea ref={searchAreaRef}>
                <IconWrapper>
                    <RiCompassLine />
                </IconWrapper>
                <input
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
                    show={isSearching}
                    transition={false}
                    target={searchAreaRef.current}
                    placement="bottom"
                    rootClose
                    rootCloseEvent='mousedown'
                    onHide={(event) => {
                        if (!searchAreaRef.current.contains(event.target)) {
                            setIsSearching(false)
                            setSearchString(selectedLocation.formatted)
                        }
                    }}
                >
                    <DropDownMenu
                        data={getLocationsOptions()}
                        loading={loading}
                        onClickOption={(location: any) => {
                            const { lat, lng } = location.geometry

                            setIsSearching(false)
                            setLoadingForecast(true)
                            setSearchString(location.formatted)
                            setSelectedLocation(location)

                            fetchForecast(lat, lng, system)
                                .then(forecast => {
                                    setForecast(parseForecastData(forecast))
                                })
                                .finally(() => setLoadingForecast(false))
                        }}
                    />
                </Overlay>
            </SearchBarArea>
            <ForecastArea
                className='today'
                tempColor={getTempColor(today?.temp, 60, system)}
            >
                <Section>
                    <Block loadingBlock={initialLoading} style={{ height: '100%', width: '100%' }}>
                        <StyledWeatherIcon iconId={today?.weather[0].icon} />
                    </Block>
                </Section>
                <Section>
                    <Block loadingBlock={initialLoading}>
                        <DayLabel>Hoje</DayLabel>
                        <Temperature onClick={switchSystem}>
                            {formatTemperature(today?.temp)}
                        </Temperature>
                    </Block>
                    <Block loadingBlock={initialLoading}>
                        <Description>
                            {today?.weather[0].description}
                        </Description>
                    </Block>
                    <Block loadingBlock={initialLoading}>
                        <div>
                            <span>Vento: </span>
                            {`${getWindDirection(today?.wind_deg)} ${today?.wind_speed} ${getUnit('wind', system)}`}
                        </div>
                        <div>
                            <span>Umidade: </span>
                            {`${today?.humidity} %`}
                        </div>
                        <div>
                            <span>Pressão: </span>
                            {`${today?.pressure} ${getUnit('pressure', system)} `}
                        </div>
                    </Block>
                </Section>
            </ForecastArea>
            <ForecastArea
                className='tomorrow'
                tempColor={getTempColor(today?.temp, 50, system)}
            >
                <Section>
                    <Block loadingBlock={initialLoading}>
                        <DayLabel>Amanhã</DayLabel>
                        <Temperature onClick={switchSystem}>
                            {formatTemperature(tomorrow?.temp.max)}
                            {` / ${formatTemperature(tomorrow?.temp.min)}`}
                        </Temperature>
                    </Block>
                </Section>
            </ForecastArea>
            <ForecastArea
                className='day-after-tomorrow'
                tempColor={getTempColor(today?.temp, 40, system)}
            >
                <Section>
                    <Block loadingBlock={initialLoading}>
                        <DayLabel>Depois de Amanhã</DayLabel>
                        <Temperature onClick={switchSystem}>
                            {formatTemperature(afterTomorrow?.temp.max)}
                            {` / ${formatTemperature(afterTomorrow?.temp.min)}`}
                        </Temperature>
                    </Block>
                </Section>
            </ForecastArea>
        </Card >
    )
}

export default ForecastCard