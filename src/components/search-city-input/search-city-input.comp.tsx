import * as Styles from './search-city-input.styles'

export interface SearchCityInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchCityInput: React.FC<SearchCityInputProps> = ({
    ...rest
}) => {
    return (
        <Styles.InputWrapper>
            <Styles.Input {...rest} />
            <Styles.StartIcon />
        </Styles.InputWrapper>
    )
}
