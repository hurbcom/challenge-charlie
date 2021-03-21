import { useEffect, useState } from "react"
import SvgIcons from "../Icons/SvgIcons"
import { apiFetch, getCoordinates, fetchUsersLocation, fetchForecast, fetchLocations } from "../Utils"
import { REVERSE_GEOCODE, USER_LOCATION, WEATHER_FORECAST } from "../Utils/urls"
import SearchBar from "./SearchBar"
import { Card, SearchBarArea } from "./styled"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

function ForecastCard() {
    const [selectedCity, setSelectedCity] = useState<string | undefined>()
    const [searchString, setSearchString] = useState<string>('')
    const TEMP_COLOR = '#ffd500'

    useEffect(() => {
        getCoordinates().then(position => {
            const { latitude, longitude } = position.coords

            fetchForecast(latitude, longitude).then(forecast => {
                console.log('FORECAST', forecast)
            })
            fetchUsersLocation(latitude, longitude).then(location => {
                if (location) {
                    setSelectedCity(location)
                }
            })
        })
    }, [])

    return (
        <Card>
            <SearchBarArea>
                <SvgIcons.Compass />
                <OverlayTrigger
                    show={true}
                    placement="bottom"
                    overlay={({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                            {...props}
                            style={{
                                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 3,
                                ...props.style,
                            }}
                        >
                            MENU
                        </div>
                    )}
                >
                    <SearchBar
                        onSearch={(searchString: any) => {
                            if (searchString.length) {
                                fetchLocations(searchString)
                                    .then(locations => {
                                        console.log(locations)
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