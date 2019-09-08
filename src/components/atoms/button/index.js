// Import Style
import { ButtonCTA } from './styled';

const Button = ( props ) => (
    <ButtonCTA {...props}>{props.text}</ButtonCTA>
);

export default Button;