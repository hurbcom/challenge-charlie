import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    background: rgba(242, 241, 242, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    min-height: 100vh;
    @media screen and (max-width: 800px){
        width: 70%;
    }
    @media screen and (max-width: 500px){
        width: 90%;
    }
`