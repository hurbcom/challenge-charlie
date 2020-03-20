import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background: #d8d8d8;
    display: flex;
    justify-content: center;
    align-items: right;
    width: 100%;
    max-width: 315px;
    border-radius: 4px;

    input {
        text-align: center;
        background: #d8d8d8;
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;
        display: block;

        &::placeholder {
            text-size-adjust: 20px;
            display: block;
        }
    }

    img {
        height: 40px;
        width: 40px;
        align-self: center;
        align-items: center;
    }
`;
