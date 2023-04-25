/**
 * This component is responsible for showing an input of cities on the screen.
 * When the user starts typing, an api call is made to show an autocomplete and help with typing.
 * When the user selects an option or presses the enter key, the onSelectCity callback will be called.
 */

import {
    useEffect,
    ChangeEvent,
    FocusEvent,
    useState,
    useCallback,
} from 'react'
import { LocationItem } from '@services/position-stack/position-stack.service.types'
import * as Styles from './search-city-input.styles'
import { useDebounce } from 'use-debounce'
import { requests } from '@services'

import { ReactComponent as CompassIcon } from '../../assets/icons/compass.svg'
import { useTheme } from '@styles/theme-provider'
import { useDevice } from '@hooks/useDevice'

export interface SearchCityInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    onSelectCity: (city: string) => void
    defaultValue: string
}

export const SearchCityInput: React.FC<SearchCityInputProps> = ({
    onSelectCity,
    defaultValue,
    ...rest
}) => {
    const [searchText, setSearchText] = useState<string>(defaultValue)
    const [canShow, setCanShow] = useState<boolean>(false)
    const [cities, setCities] = useState<LocationItem[]>([])

    useEffect(() => {
        setSearchText(defaultValue)
    }, [defaultValue])

    // Using debounce to optimize api calls
    const [debouncedSearchText] = useDebounce(searchText, 500)

    const fetchCities = useCallback(async (value: string) => {
        const response = await requests.positionStack.getCities(value)
        setCities(response)
    }, [])

    // When searchText changes (in debounce) fetch cities.
    // If searchText is empty remove suggestions of autocomplete
    useEffect(() => {
        if (debouncedSearchText) {
            fetchCities(debouncedSearchText)
        } else {
            setCities([])
        }
    }, [debouncedSearchText, fetchCities])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCanShow(true)
        setSearchText(e.target.value)
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        // This is to select the option before hiding the suggestions
        setTimeout(() => {
            setCanShow(false)
        }, 200)
    }

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setCanShow(true)
    }

    const handleSelect = (option: LocationItem) => {
        setSearchText(option.label)
        onSelectCity(option.label)
        setCanShow(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSelectCity(searchText)
            setCanShow(false)
        }
    }

    const { theme } = useTheme()
    const { device } = useDevice()

    return (
        <Styles.Wrapper>
            <Styles.InputWrapper>
                <Styles.Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    value={searchText}
                    data-testid="input"
                    {...rest}
                />
                <Styles.StartIcon>
                    <CompassIcon
                        width={device === 'desktop' ? ' 40px' : '25px'}
                        height={device === 'desktop' ? ' 40px' : '25px'}
                        fill={theme.typography.colors.secondary}
                    />
                </Styles.StartIcon>
            </Styles.InputWrapper>
            {canShow && cities.length ? (
                <Styles.SuggestionList>
                    {cities.map((option, index) => (
                        <Styles.SuggestionItem
                            key={`suggestion-${index}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </Styles.SuggestionItem>
                    ))}
                </Styles.SuggestionList>
            ) : null}
        </Styles.Wrapper>
    )
}
