import { LocationProps } from "../../hooks/useGeolocation";

import { OptionsTownProps } from "../../utils/getOptionsTown";

import SearchInput from "../SearchInput";
import ListOptionsTown from "../ListOptionsTown";

import searchIcon from "../../assets/searchIcon.svg";

import * as Styles from './styles'

interface SearchTownProps {
    setLocation: (value: LocationProps) => void
    inputTown: string
    setInputTown: (value: string) => void
    optionsTown: OptionsTownProps
    setOptionsTown: (value: OptionsTownProps) => void
}

const SearchTown: React.FC<SearchTownProps> = ({
    setLocation,
    inputTown,
    setInputTown,
    optionsTown,
    setOptionsTown,
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(optionsTown.loaded && optionsTown.towns) {
            setLocation({
                loaded: optionsTown.loaded,
                coordinates: {
                    latitude: optionsTown.towns[0].latitude,
                    longitude: optionsTown.towns[0].longitude,
                }
            })
        }
    }

    return (
        <Styles.SearchTown onSubmit={handleSubmit}>
            <SearchInput
                searchIcon={searchIcon}
                inputTown={inputTown}
                setInputTown={setInputTown}
                setOptionsTown={setOptionsTown}
            />

            {optionsTown.loaded &&
                <ListOptionsTown
                    optionsTown={optionsTown}
                    setOptionsTown={setOptionsTown}
                    setInputTown={setInputTown}
                    setLocation={setLocation}
                />
            }
        </Styles.SearchTown>
    )
}

export default SearchTown;