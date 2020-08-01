import React, {
    InputHTMLAttributes,
    useEffect,
    useCallback,
    useRef,
    useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({ name, icon: Icon, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [registerField, fieldName]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    return (
        <Container isFocused={isFocused} isFilled={isFilled}>
            {Icon && <Icon size={20} />}

            <input
                defaultValue={defaultValue}
                ref={inputRef}
                {...props}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </Container>
    );
}

export default Input;