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

    const [debouncedSearchText] = useDebounce(searchText, 500)

    const fetchCities = useCallback(async (value: string) => {
        const response = await requests.positionStack.getCities(value)
        setCities(response)
    }, [])

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

    return (
        <Styles.Wrapper>
            <Styles.InputWrapper>
                <Styles.Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    value={searchText}
                    {...rest}
                />
                <Styles.StartIcon />
            </Styles.InputWrapper>
            {canShow && cities.length ? (
                <Styles.SuggestionList>
                    {cities.map((option) => (
                        <Styles.SuggestionItem
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
