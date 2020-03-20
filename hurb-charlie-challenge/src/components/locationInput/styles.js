import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    background: blue;
    display: flex;
    align-items: center;
    width: 600px;
    border-radius: 4px;

    input {
        background: #d8d8d8;
        border: 0;
        border-radius: 4px;
        height: 44px;
        width: 600px;
        padding: 0 15px;
        color: #fff;
        margin: 0 80px;
        display: block;
    }

    img {
        height: 40px;
        width: 100px;
        align-items: center;
    }
`;
