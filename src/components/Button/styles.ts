import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: var(--hu-color);
    border-radius: 10px;
    border: 0;
    padding: 10px;
    height: 100%;
    width: 200px;
    color: var(--white-color);
    font-weight: 500;
    margin-left: 8px;
    transition: background .2s;

    &:hover {
        background: ${shade(.2, '#083D7D')};
    }
`;

export const Loading = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    &:after {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        margin: auto;
        border-radius: 50%;
        border: 3px solid var(--white-color);
        border-color: var(--white-color) transparent var(--white-color) transparent;
        animation: spinner 1.2s linear infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;