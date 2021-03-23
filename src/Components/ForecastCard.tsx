import { useCallback, useEffect, useRef, useState } from "react"
import SvgIcons from "../Icons/SvgIcons"
import { apiFetch, getCoordinates, fetchUsersLocation, fetchForecast, fetchLocations } from "../Utils"
import { REVERSE_GEOCODE, USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import SearchBar from "./SearchBar"
import { Card, IconWrapper, SearchBarArea } from "./styled"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import DropDownMenu from "./DropDownMenu"
import { RiCompassLine } from 'react-icons/ri'

let currentString: string = ''

function ForecastCard() {
    const searchAreaRef = useRef(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [searching, setSearching] = useState<boolean>(false)
    const [locations, setLocations] = useState<any>()
    const [selectedCity, setSelectedCity] = useState<string | undefined>()
    const [searchString, setSearchString] = useState<string>('')
    const TEMP_COLOR = '#ffd500'

    useEffect(() => {
        getCoordinates().then(position => {
            const { latitude, longitude } = position.coords

            fetchForecast(latitude, longitude).then(forecast => {
                // console.log('FORECAST', forecast)
            })
            fetchUsersLocation(latitude, longitude).then(location => {
                if (location) {
                    setSelectedCity(location)
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


    return (
        <Card>
            <SearchBarArea>
                <IconWrapper>
                    <RiCompassLine />
                </IconWrapper>
                <SearchBar
                    ref={searchAreaRef}
                    onFocus={() => setSearching(true)}
                    onSearch={(string: any) => {
                        currentString = string
                        setSearchString(string)
                        setLoading(true)
                        fetchLocations(string)
                            .then(locations => {
                                if (currentString === string) {
                                    setLoading(false)
                                    setLocations(locations)
                                }
                            })
                    }}
                />
                <Overlay
                    show={searching}
                    target={searchAreaRef.current}
                    placement="bottom"
                    rootClose
                    onHide={(event) => {
                        if (event.target !== searchAreaRef.current) {
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
                        onClickOption={(option: any) => console.log('OPTION', option)}
                    />
                </Overlay>
            </SearchBarArea>
            <div className='main' style={{ flexGrow: 1, backgroundColor: `${TEMP_COLOR}7F` }}>
            </div>
            <div className='tomorrow' style={{ height: '15%', backgroundColor: `${TEMP_COLOR}CC` }}>
            </div>
            <div className='day-after-tomorrow' style={{ height: '15%', backgroundColor: `${TEMP_COLOR}AA` }}>
            </div>
        </Card >
    )
}

export default ForecastCard