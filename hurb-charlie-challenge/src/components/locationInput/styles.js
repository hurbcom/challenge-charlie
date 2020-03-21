import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #d8d8d8;
    display: flex;
    align-items: center;
    align-self: center;
    border-radius: 4px;
    flex: 0.2;
    width: 40%;

    input {
        background: #d8d8d8;
        border: 0;
        border-radius: 4px;
        color: #6e6e6e;
        height: 50px;
        margin-left: 20px;
        width: 300px;

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
        background: #7159c1;
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
