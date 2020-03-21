import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    height: 80px;
    background: #d8d8d8;
    display: flex;
    align-items: center;
    width: 600px;
    border-radius: 4px;
    input {
        background: #d8d8d8;
        border: 0;
        border-radius: 4px;
        color: #6e6e6e;
        height: 50px;
        margin-left: 20px;

        &::placeholder {
            text-decoration-color: #6e6e6e;
            text-decoration: bold;
        }
    }

    img {
        align-self: center;
        max-width: 60px;
        align-items: center;
        margin-left: 20px;
    }

    button {
        background: #d8d8d8;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-left: 20px;
        display: flex;
        align-items: center;
        transition: background 0.2s;
        height: 40px;
        width: 50px;

        &:hover {
            background: ${darken(0.03, '#7159c1')};
        }
    }
`;
