import React from 'react';
import { Input, InputContainer } from './Input.styles';

const InputForm = ({
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
}) => {
    return (
        <InputContainer>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            ></Input>
        </InputContainer>
    );
};

export default InputForm;