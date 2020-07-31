import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: #E1E1E1;
    color: var(--black-color);
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    border: 2px solid #E1E1E1;

    ${props => props.isFocused && css`
        border-color: var(--hu-color);
        color: var(--hu-color);
    `}

    ${props => props.isFilled && css`
        color: var(--hu-color);
    `}

    input {
        color: var(--black-color);
        background: transparent;
        flex: 1;
        width: 100%;
        border: 0;

        &::placeholder {
            color: #555;
        }
    }

    svg {
          margin-right: 16px;
    }
`;