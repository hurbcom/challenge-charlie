import { InputStyled } from './style';

export const Input = ({ type = 'text', icon = '' }) => (
  <InputStyled>
    {icon && (
      <div className="input__icon">
        <img src={icon} alt="compass" />
      </div>
    )}
    <input type={type} />
  </InputStyled>
);
