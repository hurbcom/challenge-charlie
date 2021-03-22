import { useCallback, useEffect, useState } from "react"
import SvgIcons from "../Icons/SvgIcons"
import { apiFetch, getCoordinates, fetchUsersLocation, fetchForecast, fetchLocations } from "../Utils"
import { REVERSE_GEOCODE, USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import SearchBar from "./SearchBar"
import { Card, SearchBarArea } from "./styled"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import DropDownMenu from "./DropDownMenu"

let currentString: string = ''

function ForecastCard() {
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
        // console.log(locations)
        if (locations?.results) {
            return locations.results.map((location: any, index: number) => ({ value: location.formatted, id: index }))
        } else {
            return []
        }


    }, [locations])


    return (
        <Card>
            <SearchBarArea>
                <SvgIcons.Compass />
                <OverlayTrigger
                    show={searching}
                    placement="bottom"
                    overlay={({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <DropDownMenu
                            {...props}
                            style={{
                                margin: '0 auto',
                                width: '65%',
                                backgroundColor: 'rgba(43, 50, 82, 0.85)',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 5,
                                ...props.style,
                            }}
                            data={getLocationsOptions()}
                            loading={loading}
                        />


                    )}
                >
                    <SearchBar
                        onFocus={() => setSearching(true)}
                        onBlur={() => setSearching(false)}
                        onSearch={(string: any) => {
                            if (string.length) {
                                currentString = string
                                setLoading(true)
                                fetchLocations(string)
                                    .then(locations => {
                                        setLocations(locations)
                                    })
                                    .finally(() => {
                                        if (currentString === string) {
                                            setLoading(false)
                                        }
                                    })
                            }
                        }}
                    />
                </OverlayTrigger>
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