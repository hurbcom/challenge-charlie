import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/weatherLocation.context";

export const InputLocation = () => {
    const { location, changeLocation } = useAppContext();
    const [inputValue, setInputValue] = useState(
        `${location?.city ?? ""}${location?.state ? `,${location?.state}` : ""}`
    );
    useEffect(() => {
        setInputValue(
            `${location?.city ?? ""}${
                location?.state ? `,${location?.state}` : ""
            }`
        );
    }, [location]);
    return (
        <InputWrapper
            data-icon={"("}
            onSubmit={(evt) => {
                evt.preventDefault();

                changeLocation(inputValue);
            }}
        >
            <StyledInput
                value={inputValue}
                onChange={(evt) => setInputValue(evt.target.value)}
                data-cy="inputLocation"
                onBlur={(evt) => {
                    changeLocation(evt.target.value);
                }}
            />
        </InputWrapper>
    );
};
const InputWrapper = styled.form`
    background-color: #ffffffca;
    display: flex;
    align-items: center;
    &:before {
        font-size: 9vh;
        height: 9vh;
        color: #8d8986;
        margin: 0 2vh;
    }
`;
const StyledInput = styled.input`
    width: calc(100% - 14vh);
    height: 100%;
    font-size: 5.5vh;
    border: none;
    background-color: transparent;
    color: #666;
`;
