import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: rgba(237, 184, 20, 0.9);    
    justify-content: space-evenly;
    color: white;
    height: 439px;
`;

export const TextContainer = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;

`
export const TextDescription = styled.p`
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 500;
`

export const TextInfo = styled.div`
    font-size: 30px;
    font-weight: 500;
`