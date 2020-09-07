import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocationByAddress, fetchLocation } from '../actions/location.actions'
import { IconButton, Paper, InputBase, CircularProgress, InputAdornment, Divider } from '@material-ui/core'
import GpsFixed from '@material-ui/icons/GpsFixed'
import Search from '@material-ui/icons/Search'

function LocationSearch() {
    const dispatch = useDispatch()

    const address = useSelector(state => state.location.address)
    const fetchingLocation = useSelector(state => state.location.fetching)
    const fetchingWeatherForecast = useSelector(state => state.weatherForecast.fetching)

    const [newAddress, setNewAddress] = useState('')

    useEffect(() => {
        setNewAddress(address)
    }, [address])

    return (
        <Paper
            style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 16
            }}
        >
            <InputBase
                style={{
                    flex: 1
                }}
                value={newAddress}
                placeholder="Pesquisar local"
                onChange={(e) => setNewAddress(e.target.value)}
            />
            <IconButton
                disabled={!newAddress}
                onClick={() => dispatch(fetchLocationByAddress(newAddress))}>
                {
                    fetchingLocation || fetchingWeatherForecast ?
                        <CircularProgress size={22} /> :
                        <Search />

                }
            </IconButton>
            <IconButton
                onClick={() => dispatch(fetchLocation())}>
                <GpsFixed />
            </IconButton>
        </Paper>
    )
}

export default LocationSearch