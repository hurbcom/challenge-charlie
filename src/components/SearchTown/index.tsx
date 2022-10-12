import { LocationProps } from "../../hooks/useGeolocation";

import { OptionsTownProps } from "../../utils/getOptionsTown";

import SearchInput from "../SearchInput";
import ListOptionsTown from "../ListOptionsTown";

import searchIcon from "../../assets/searchIcon.svg";

import "./styles.css"

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
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
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
        <form className="search-town" onSubmit={handleSubmit}>
            <SearchInput
                searchIcon={searchIcon}
                inputTown={inputTown}
                setInputTown={setInputTown}
                setOptionsTown={setOptionsTown}
            />

            <ListOptionsTown
                optionsTown={optionsTown}
                setOptionsTown={setOptionsTown}
                setInputTown={setInputTown}
                setLocation={setLocation}
            />
        </form>
    )
}

export default SearchTown;