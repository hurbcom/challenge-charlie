import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.LegacyRef<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ inputRef, ...rest }) => {
    return (
        <Container>
            <input ref={inputRef} {...rest} />
        </Container>
    );
};

export default Input;
