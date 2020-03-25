import styled from 'styled-components';

export const Container = styled.div`
    flex: 0.25;
    width: 40%;
    text-align: right;
    height: 250px;
    div {
        padding-top: 10px;
    }

    button {
        margin-right: 80px;
        border: none;
        background: none;
    }

    strong {
        padding: 70px;
        top: 50px;
        color: rgb(250, 250, 250, 0.9);
    }
`;

export const Content = styled.div`
    background: ${props => props.background};
    height: 40%;
    opacity: ${props => props.opacity};
`;
