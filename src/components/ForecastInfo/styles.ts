import styled, { css } from "styled-components";
import { ForecastInfoProps } from ".";

type WrapperProps = Pick<ForecastInfoProps, "day"> & {
    bgColor: string;
};

const WrapperModifier = {
    today: (color: string) => color + "b3",
    tomorrow: (color: string) => color + "e6",
    afterTomorrow: (color: string) => color + "f2",
};

export const Wrapper = styled.div<WrapperProps>`
    ${({ day, bgColor, theme }) => css`
        padding: 12px;
        display: grid;
        gap: 30px;
        grid-template-columns: 200px 1fr;
        color: ${theme.colors.white};
        background-color: ${WrapperModifier[day](bgColor)};
    `}
`;

export const IconContainer = styled.div`
    position: relative;
    margin: 12px;
`;

export const Info = styled.div`
    text-align: left;
`;

export const DayTitle = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
`;

export const Subtitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;

    text-transform: capitalize;
`;

export const Details = styled.div`
    margin-top: 1.5rem;
`;
