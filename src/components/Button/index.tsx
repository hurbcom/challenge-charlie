import React, { ButtonHTMLAttributes } from 'react';

import { Container, Loading } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
};

const Button:React.FC<IButtonProps> = ({ loading, children, ...props }) => (
    <Container type="button" {...props}>
        {loading ? <Loading /> : children}
    </Container>
);

export default Button;