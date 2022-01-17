import React from 'react'
import axios from 'axios'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'

import { useSnackbar } from 'react-simple-snackbar'

import searchIcon from '../../assets/search.svg'
import inputIcon from '../../assets/input-icon.svg'

import { snackbarOptions } from '../../utils'
import { Container, StyledInput, Button, Icon } from './styles'

const SearchInput = ({ setLoading, changeLocation, emptySearch }) => {
    const { t } = useTranslation()
    const [openSnackbar] = useSnackbar(snackbarOptions)

    // this methods search the location based on the input value
    // if there is a valid result, it dispatch a change to the father component
    const searchLocation = async (city) => {
        setLoading(true)
        await axios
            .get(process.env.REACT_APP_OPEN_CAGE_URL, {
                params: {
                    q: city,
                    key: process.env.REACT_APP_OPEN_CAGE_KEY,
                },
            })
            .then(({ data }) => {
                if (data.results.length === 0) {
                    openSnackbar(t('noSearchResults'))
                    emptySearch()
                    return
                }
                const location = data.results[0]
                changeLocation(
                    location.formatted,
                    location.geometry.lat,
                    location.geometry.lng
                )
            })
            .catch(() => {
                openSnackbar(t('requestError'))
            })
            .finally(() => setLoading(false))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchLocation(e.target[0].value)
    }

    const searchClicked = () => {
        const value = document.getElementById('search-input').value
        if (value) searchLocation(value)
    }

    return (
        <Container onSubmit={handleSubmit}>
            <Icon
                src={inputIcon}
                alt='input-icon'
                data-tip={t('inputHint')}
                data-for='input-hint'
            />
            <ReactTooltip effect='solid' id='input-hint' />
            <StyledInput
                type='text'
                name='location'
                id='search-input'
                placeholder={t('inputPlaceholder')}
            />
            <Button
                src={searchIcon}
                alt='search-icon'
                onClick={searchClicked}
            />
        </Container>
    )
}

export default SearchInput
