import { useEffect, useState } from "react";
import styled from "styled-components";
import { getLocationName } from "../apis/locationName";

export const InputLocation = () => {
    const [location, setLocation] = useState("");
    useEffect(() => {
        navigator?.geolocation.getCurrentPosition(async (position) => {
            setLocation(await getLocationName(position.coords));
        });
    }, []);
    return (
        <InputWrapper data-icon={"("}>
            <StyledInput value={`${location.municipality},${location.state}`} />
        </InputWrapper>
    );
};
const InputWrapper = styled.div`
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
`;
