import { SelectProps } from './select.types'
import * as Styles from './select.styles'
import { ChangeEvent } from 'react'

export const Select: React.FC<SelectProps> = ({
    options,
    onSelect,
    defaultValue,
}) => {
    return (
        <Styles.CustomSelect>
            <Styles.Select
                value={defaultValue}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    onSelect(e.target.value)
                }
            >
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </Styles.Select>
        </Styles.CustomSelect>
    )
}
