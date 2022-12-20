import React from 'react';
import { Input, InputContainer } from './Input.styles';

interface InputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string,
    placeholder: string,
    type: string
}

const InputForm = ({
    type,
    placeholder,
    value,
    onChange
}: InputProps) => {



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