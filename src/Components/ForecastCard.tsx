import { useCallback, useEffect, useRef, useState } from "react"
import { getCoordinates, fetchUserLocation, fetchForecast, fetchLocations, getTempColor, getWindDirection } from "../Utils"
import { Card, IconWrapper, ForecastArea, SearchBarArea, DayLabel, Description, StyledWeatherIcon, Block, Section, StyledDropdown } from "./styled"
import Overlay from 'react-bootstrap/Overlay';
import { RiCompassLine } from 'react-icons/ri'
import DropDownMenu from "./DropDownMenu";

let currentString: string = ''
let timeout: any

function ForecastCard() {
    const aearchAreaRef = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingForecast, setLoadingForecast] = useState<boolean>(true)
    const [searching, setSearching] = useState<boolean>(false)
    const [forecast, setForecast] = useState<any>({})
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
            fetchForecast(lat, lng)
                .then(forecast => {


                    setForecast(
                        {
                            'today': {
                                current: forecast.current,
                                forecast: forecast[0]
                            },
                            'tomorrow': {
                                forecast: forecast[1]
                            },
                            'after-tomorrow': {
                                forecast: forecast[1]
                            }
                        }
                    )
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
                <Section>
                    <Block loading={loadingForecast} style={{ height: '100%', width: '100%' }}>
                        <StyledWeatherIcon iconId={forecast[0]?.weather[0].icon} />
                    </Block>
                </Section>
                <Section>
                    <Block loading={loadingForecast}>
                        <DayLabel>Hoje</DayLabel>
                        {`${forecast[0]?.temp.max} ${UNITS_OF_MEASUREMENT['temperature']}`}
                    </Block>
                    <Block loading={loadingForecast}>
                        <Description>
                            {forecast[0]?.weather[0].description}
                        </Description>
                        <div>
                            <span>Vento: </span>
                            {`${forecast[0]?.wind_speed} ${UNITS_OF_MEASUREMENT['wind']} `}
                        </div>
                        <div>
                            <span>Umidade: </span>
                            {`${forecast[0]?.humidity} %`}
                        </div>
                        <div>
                            <span>Pressão: </span>
                            {`${forecast[0]?.pressure} ${UNITS_OF_MEASUREMENT['pressure']} `}
                        </div>
                    </Block>
                </Section>
            </ForecastArea>
            <ForecastArea
                className='tomorrow'
                tempColor={getTempColor(forecast[0]?.temp.max, 50)}
            >
                <Section>
                    <DayLabel>Amanhã</DayLabel>
                    <Block loading={loadingForecast}>
                        {`${forecast[1]?.temp.max} ${UNITS_OF_MEASUREMENT['temperature']}`}
                    </Block>
                </Section>
            </ForecastArea>
            <ForecastArea
                className='day-after-tomorrow'
                tempColor={getTempColor(forecast[0]?.temp.max, 40)}
            >
                <Section>
                    <DayLabel>Depois de Amanhã</DayLabel>
                    <Block loading={loadingForecast}>
                        {`${forecast[2]?.temp.max} ${UNITS_OF_MEASUREMENT['temperature']}`}
                    </Block>
                </Section>
            </ForecastArea>
        </Card >
    )
}

export default ForecastCard