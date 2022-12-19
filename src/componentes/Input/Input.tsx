import React from 'react';
import { Input, InputContainer } from './Input.styles';

const InputForm = ({
    type,
    placeholder,
    value,
    onChange
}) => {



    return (
        <InputContainer>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></Input>
        </InputContainer>
    );
};

export { InputForm };