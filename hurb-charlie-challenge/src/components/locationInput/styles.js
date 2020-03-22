import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #e6e6e6;
    display: flex;
    align-items: center;
    align-self: center;
    border-radius: 4px;
    flex: 0.15;
    width: 40%;

    input {
        background: #e6e6e6;
        border: none;
        border-radius: 4px;
        color: #6e6e6e;
        height: 50px;
        margin-left: 20px;
        width: 300px;
    }

    img {
        align-self: center;
        max-width: 60px;
        align-items: center;
        margin-left: 20px;
    }

    button {
        background: #6e6e6e;
        color: #fff;
        border: 0;
        border-radius: 4px;
        margin-left: 20px;
        transition: background 0.2s;
        height: 40px;
        width: 60px;
        cursor: pointer;

        &:hover {
            background: ${darken(0.03, '#6E6E6E')};
        }
    }
`;
