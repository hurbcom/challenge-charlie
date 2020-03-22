import styled from 'styled-components';

export const Container = styled.div`
    background: green;
    flex: 0.2;
    width: 40%;
    text-align: right;
    > span {
        margin-right: 30px;
        margin-top: 50px;
        text-decoration: bold;
    }

    button {
        margin-right: 120px;
        border: none;
        background: none;
    }

    strong {
        padding: 70px;
        top: 50px;
    }
`;
