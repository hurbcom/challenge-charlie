export interface Option {
    value: string
    label: string
}

export interface SelectProps {
    options: Option[]
    defaultValue: string
    onSelect: (value: string) => void
}
