import { LocationProps } from "../../hooks/useGeolocation";

import getOptionsTown, { OptionsTownProps } from "../../utils/getOptionsTown";

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
    const handleChangeInput = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTown(event.target.value)
        setOptionsTown(await getOptionsTown(event.target.value))
    }

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
            <Styles.Search>
                <Styles.Icon src={searchIcon} alt="ícone" />
                
                <Styles.Input
                    type="text"
                    name="input-town"
                    placeholder="Buscar Cidade"
                    value={inputTown}
                    onChange={handleChangeInput}
                />
            </Styles.Search>

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