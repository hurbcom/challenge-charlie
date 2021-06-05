import { InputStyled } from './style';

interface IInput {
  type?: string;
  icon?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', icon = '', value = '', onChange }: IInput) => (
  <InputStyled>
    {icon && (
      <div className="input__icon">
        <img src={icon} alt="compass" />
      </div>
    )}
    <input type={type} value={value} onChange={onChange} />
  </InputStyled>
);
