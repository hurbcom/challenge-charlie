import { Input } from './Input.styles'

interface Props {
  disabled?: boolean,
  name: string,
  onChange: Function,
  onClick: Function,
  placeholder?: string,
  value: string,
}

export default function ({
  disabled = false,
  name,
  onChange,
  onClick,
  placeholder = '',
  value = '',
}: Props) {
  return (
    <Input
      disabled={disabled}
      name={name}
      onChange={(e) => onChange(e)}
      onClick={() => onClick()}
      placeholder={placeholder}
      type='text'
      value={value}
    />
  )
}
