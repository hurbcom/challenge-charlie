import { CODES_TO_ICONS, DEVICES } from "@constants/index";
import React from "react";
import styled from "styled-components";

export const WeatherIcon = styled.div<{ icon: string }>`
    font-size: 9rem;
    @media ${DEVICES["tablet"]} {
        font-size: 12rem;
    }
    ::before {
        content: "${({ icon }) => CODES_TO_ICONS[icon]}";
        font-family: "MeteoconsRegular";
    }
`;

export default ({ iconCode }: { iconCode: string }) => {
    return <i  data-icon={CODES_TO_ICONS[iconCode]}></i>;
};
