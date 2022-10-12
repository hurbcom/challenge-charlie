import getOptionsTown, { OptionsTownProps } from "../../utils/getOptionsTown";

import * as Styles from './styles'

interface SearchInputProps {
    searchIcon: string
    inputTown: string
    setInputTown: (value: string) => void
    setOptionsTown: (value: OptionsTownProps) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
    searchIcon,
    inputTown,
    setInputTown,
    setOptionsTown,
}) => {
    const handleChangeInput = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTown(event.target.value)
        setOptionsTown(await getOptionsTown(event.target.value))
    }

    return (
        <Styles.Search>
            <Styles.Image>
                <Styles.SearchIcon src={searchIcon} alt="ícone" />
            </Styles.Image>
            <Styles.InputTown
                type="text"
                name="input-town"
                placeholder="Buscar Cidade"
                value={inputTown}
                onChange={handleChangeInput}
            />
        </Styles.Search>
    )
}

export default SearchInput;