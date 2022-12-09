import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    justify-content: space-around;
    background-color: ${props => `${props.backgroundColor}${props.transparent ? "e6" : ""}`};
    justify-content: space-around;
    align-items: center;
    font-size: 32px;
`