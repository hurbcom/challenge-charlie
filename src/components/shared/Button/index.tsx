import { ButtonStyled } from './style';

interface IButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IButton) => (
  <ButtonStyled onClick={onClick}>
    <img src={require('../../../assets/icons/target.svg')} alt={text} />
    {text}
  </ButtonStyled>
);
