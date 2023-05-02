import styled from "styled-components";
import { opacityVariables } from "@styles/mixins";

export const WeatherInfoContent = styled.div<{
    bg?: string;
    position?: number;
}>`
    ${opacityVariables}
    position: relative;
    z-index: 3;
    height: 100%;
    width: 100%;
    padding: 0 5%;
    display: flex;
    background-color: ${({ bg }) => (bg ? bg : "gray")};
`;

export const WeatherText = styled.div`
    margin-left: 5%;
    margin-top: 5%;
`;
