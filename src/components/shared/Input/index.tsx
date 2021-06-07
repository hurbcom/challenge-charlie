import { memo } from 'react';

import { InputStyled } from './style';

interface IInput {
  type?: string;
  icon?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEventHandler<HTMLInputElement> | undefined) => void;
}

export const Input = ({ type = 'text', icon = '', value = '', onChange, onKeyPress }: IInput) => (
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
    />
  </InputStyled>
);

export default memo(Input);
