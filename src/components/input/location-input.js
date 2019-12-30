import React, { useState, useEffect } from "react";

import styled from "styled-components";

import colors from "../../styles/colors";

import {
    getCurrentLocation,
    coordinatesToCityName,
    cityNameToCoordinates
} from "../../services/location";

const Wrapper = styled.div`
    position: relative;

    &:before {
        content: url(${require("../../assets/icons/compass.svg")});
        display: block;
        position: absolute;
        height: 50px;
        width: 50px;

        top: 50%;
        left: 20px;
        transform: translateY(-50%);
    }
`;

const Input = styled.input`
    display: block;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 20px;
    padding-left: 90px;
    box-sizing: border-box;
    border: none;
    color: ${colors["gray"]["normal"]};
    font-weight: bold;
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0.7);
`;

export default ({ setLocation }) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        getUserLocation();
    }, []);

    useEffect(() => {
        validateTypedCity(value);
    }, [value]);

    const getUserLocation = async () => {
        try {
            const coords = await getCurrentLocation();

            const cityName = await coordinatesToCityName(
                coords.latitude,
                coords.longitude
            );

            setValue(cityName);
            setLocation(coords);
        } catch (error) {
            console.error(error);
        }
    };

    const validateTypedCity = async value => {
        try {
            if (value.length < 3) return;
            const newCoords = await cityNameToCoordinates(value);
            if (newCoords !== null) setLocation(newCoords);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Wrapper>
            <Input value={value} onChange={e => setValue(e.target.value)} />
        </Wrapper>
    );
};
