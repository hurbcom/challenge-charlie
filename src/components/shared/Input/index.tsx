import { memo } from 'react';

import { InputStyled } from './style';

interface IInput {
  type?: string;
  icon?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEventHandler<HTMLInputElement> | undefined) => void;
  placeholder?: string;
}

export const Input = ({ type = 'text', icon = '', value = '', placeholder, onChange, onKeyPress }: IInput) => (
  <InputStyled>
    {icon && (
      <div className="input__icon">
        <img src={icon} alt="compass" />
      </div>
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      aria-label="Digite sua localidade aqui"
      placeholder={placeholder}
    />
  </InputStyled>
);

export default memo(Input);
