import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 500px;
    height: 500px;
    background-color: #000;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        width: 350px;
        height: 450px;
    }
`;

export const WeaterContainer = styled.div`
    background-color: red;
    height: 100%;
`;

export const WeaterContent = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Icon = styled.div`
    flex: 1;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Informations = styled.div`
    flex: 1;
    background-color: burlywood;
    text-align: left;
    padding: 30px;
`;

export const Details = styled.div``;

export const After = styled.div``;
