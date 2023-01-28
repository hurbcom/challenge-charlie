import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`;

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        padding: 12px 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        border-bottom: 1px solid ${theme.colors.lightGray};
        box-shadow: ${theme.shadow};
    `}
`;

export const Input = styled.input`
    border: 0;
    outline: none;
    width: 100%;
    font-size: 1.2rem;
    font-family: inherit;

    &,
    &::placeholder {
        color: ${({ theme }) => theme.colors.darkGray};
    }
`;

export const LoadingMessage = styled.span`
    font-size: 1.2rem;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.darkGray};
    animation: fade 1.6s infinite;

    @keyframes fade {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const IconWrapper = styled.div`
    width: 30px;
    height: 30px;

    svg {
        fill: ${({ theme }) => theme.colors.darkGray};
    }
`;

export const List = styled.ul`
    ${({ theme }) => css`
        width: 100%;
        position: absolute;
        list-style: none;
        max-height: 420px;
        overflow-y: scroll;
        background-color: ${theme.colors.white};
        z-index: 1;
    `}
`;

export const ListItem = styled.li`
    padding: 16px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    text-align: left;

    &.empty-state {
        text-align: center;
    }
`;
