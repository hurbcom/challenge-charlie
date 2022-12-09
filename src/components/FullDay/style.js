import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    justify-content: space-around;
    align-items: center;
`

export const DescriptionTest = styled.p`
    font-size: 32px;
    margin-bottom: 20px;
`