import { useCallback, useEffect, useRef, useState } from "react"
import SvgIcons from "../Icons/SvgIcons"
import { apiFetch, getCoordinates, fetchUserLocation, fetchForecast, fetchLocations } from "../Utils"
import { REVERSE_GEOCODE, USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import { Card, IconWrapper, SearchBarArea } from "./styled"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import DropDownMenu from "./DropDownMenu"
import { RiCompassLine } from 'react-icons/ri'

let currentString: string = ''
let timeout: any

function ForecastCard() {
    const searchInputRef = useRef<any>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [searching, setSearching] = useState<boolean>(false)
    const [locations, setLocations] = useState<any>()
    const [selectedLocation, setSelectedLocation] = useState<any | undefined>()
    const [searchString, setSearchString] = useState<string>('')
    const TEMP_COLOR = '#ffd500'

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
            console.log('HOOK_SELECTED_LOC', selectedLocation)
            //searchInputRef.current.value = selectedLocation.formatted
            //setSearching(false)

            const { lat, lng } = selectedLocation.geometry
            fetchForecast(lat, lng).then(forecast => {
                console.log('FORECAST', forecast)
                //searchInputRef.current?.blur()
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

    console.log('SEARCH_STR', searchString)

    return (
        <Card>
            <SearchBarArea ref={searchInputRef}>
                <IconWrapper>
                    <RiCompassLine />
                </IconWrapper>
                <input
                    type="text"
                    value={searchString}
                    onFocus={() => setSearching(true)}
                    onChange={e => {
                        onSearchLocation(e.target.value)
                    }}

                />
                <Overlay
                    show={searching && searchString.length > 1}
                    target={searchInputRef.current}
                    placement="bottom"
                    rootClose
                    onHide={(event) => {
                        if (!searchInputRef.current.contains(event.target)) {
                            searchInputRef.current.querySelector('input').blur()
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