import { css } from "styled-components";

export const baseFontSize = "1.25rem";
export const subTitleFontSize = "1.75rem";
//this guy only exists to create a better developer experience when using the meteocons font 
//that is very cumbersome
export const CompassIconMixin = css`
    font-family: "MeteoconsRegular";
    content: "(";
`;

export const globalFontMixin = css`
    font-family: "Source Sans Pro", sans-serif;
    font-size: ${baseFontSize};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
`;

export const opacityVariables = css`
    --max-bg-opacity: 0.4;
    --medium-bg-opacity: 0.6;
    --min-bg-opacity: 0.8;
`;
