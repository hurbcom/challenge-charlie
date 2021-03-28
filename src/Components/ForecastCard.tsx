import { useCallback, useEffect, useRef, useState } from "react"
import { getCoordinates, fetchUserLocation, fetchForecast, fetchLocations, getTempColor, getWindDirection, getUnit } from "../Utils"
import { Card, IconWrapper, ForecastArea, SearchBarArea, DayLabel, Description, StyledWeatherIcon, Block, Section, Temperature } from "./styled"
import Overlay from 'react-bootstrap/Overlay'
import { RiCompassLine } from 'react-icons/ri'
import DropDownMenu from "./DropDownMenu"

let currentString: string = ''
let timeout: any

function ForecastCard() {
    const aearchAreaRef = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [initialLoading, setInitialLoading] = useState<boolean>(true)
    const [loadingForecast, setLoadingForecast] = useState<boolean>(false)
    const [searching, setSearching] = useState<boolean>(false)
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
                            setForecast(parseForecast(forecast))
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

    function parseForecast(forecast: any) {
        return (
            {
                'today': {
                    current: forecast.current,
                    forecast: forecast.daily[0]
                },
                'tomorrow': {
                    forecast: forecast.daily[1]
                },
                'afterTomorrow': {
                    forecast: forecast.daily[2]
                }
            }
        )
    }

    function switchSystem() {
        const newSystem = system === 'metric' ? 'imperial' : 'metric'
        const { lat, lng } = selectedLocation.geometry

        setLoadingForecast(true)

        fetchForecast(lat, lng, newSystem)
            .then(forecast => {
                setForecast(parseForecast(forecast))
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
                        data={getLocationsOptions()}
                        loading={loading}
                        onClickOption={(location: any) => {
                            const { lat, lng } = location.geometry

                            setSearching(false)
                            setLoadingForecast(true)
                            setSearchString(location.formatted)
                            setSelectedLocation(location)

                            fetchForecast(lat, lng, system)
                                .then(forecast => {
                                    setForecast(parseForecast(forecast))
                                })
                                .finally(() => setLoadingForecast(false))
                        }}
                    />
                </Overlay>
            </SearchBarArea>
            <ForecastArea
                className='today'
                tempColor={getTempColor(today?.current.temp, 60, system)}
            >
                <Section>
                    <Block loadingBlock={initialLoading} style={{ height: '100%', width: '100%' }}>
                        <StyledWeatherIcon iconId={today?.current.weather[0].icon} />
                    </Block>
                </Section>
                <Section>
                    <Block loadingBlock={initialLoading}>
                        <DayLabel>Hoje</DayLabel>
                        <Temperature onClick={switchSystem}>
                            {formatTemperature(today?.current.temp)}
                        </Temperature>
                    </Block>
                    <Block loadingBlock={initialLoading}>
                        <Description>
                            {today?.current.weather[0].description}
                        </Description>
                    </Block>
                    <Block loadingBlock={initialLoading}>
                        <div>
                            <span>Vento: </span>
                            {`${getWindDirection(today?.current.wind_deg)} ${today?.current.wind_speed} ${getUnit('wind', system)}`}
                        </div>
                        <div>
                            <span>Umidade: </span>
                            {`${today?.current.humidity} %`}
                        </div>
                        <div>
                            <span>Pressão: </span>
                            {`${today?.current.pressure} ${getUnit('pressure', system)} `}
                        </div>
                    </Block>
                </Section>
            </ForecastArea>
            <ForecastArea
                className='tomorrow'
                tempColor={getTempColor(today?.current.temp, 50, system)}
            >
                <Section>
                    <Block loadingBlock={initialLoading}>
                        <DayLabel>Amanhã</DayLabel>
                        <Temperature onClick={switchSystem}>
                            {formatTemperature(tomorrow?.forecast.temp.max)}
                            {` / ${formatTemperature(tomorrow?.forecast.temp.min)}`}
                        </Temperature>
                    </Block>
                </Section>
            </ForecastArea>
            <ForecastArea
                className='day-after-tomorrow'
                tempColor={getTempColor(today?.current.temp, 40, system)}
            >
                <Section>
                    <Block loadingBlock={initialLoading}>
                        <DayLabel>Depois de Amanhã</DayLabel>
                        <Temperature onClick={switchSystem}>
                            {formatTemperature(afterTomorrow?.forecast.temp.max)}
                            {` / ${formatTemperature(afterTomorrow?.forecast.temp.min)}`}
                        </Temperature>
                    </Block>
                </Section>
            </ForecastArea>
        </Card >
    )
}

export default ForecastCard