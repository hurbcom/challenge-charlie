import styled from "styled-components";
import { CompassIconMixin, subTitleFontSize } from "@styles/mixins";

export const Input = styled.input`
    box-shadow: 0px 3px 20px -9px rgba(51, 51, 51, 1);
    outline: none;
    opacity: 0.8;

    border: none;
    position: relative;
    width: 100%;
    padding: 1.5rem;
    padding-left: 5rem;

    color: #666;
    font-size: ${subTitleFontSize};
    font-weight: 600;
    box-sizing: border-box;
    max-width: 500px;
`;

export const InputWrapper = styled.span`
    position: relative;
    display: inline-block;
    height: auto;
    overflow: hidden;
    color: #666;
    width: 100%;
    max-width: 500px;
    ::before {
        ${CompassIconMixin}
        height: 100%;
        left: 1rem;
        position: absolute;
        top: 1.4rem;
        width: 2em;
        font-size: 3rem;
        z-index: 3;
    }
`;
