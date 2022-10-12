import getOptionsTown, { OptionsTownProps } from "../../utils/getOptionsTown";

import "./styles.css"

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
        <div className="search">
            <div className="image">
                <img className="search-icon" src={searchIcon} alt="ícone" />
            </div>
            <input
                className="input-town"
                type="text"
                name="input-town"
                placeholder="Buscar Cidade"
                value={inputTown}
                onChange={handleChangeInput}
            />
        </div>
    )
}

export default SearchInput;