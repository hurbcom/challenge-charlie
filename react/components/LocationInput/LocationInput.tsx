import React from "react";
import { Input, InputWrapper } from "./style";

interface LocationInputProps {
    value: string;
    isLoading: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default ({ value, isLoading, onChange, onBlur }: LocationInputProps) => {
    return (
        <InputWrapper>
            <Input
                type="text"
                name="location"
                id="location"
                placeholder={
                    isLoading ? "Carregando..." : "Digite o local desejado"
                }
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </InputWrapper>
    );
};
