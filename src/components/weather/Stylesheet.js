import styled from "styled-components";

export const Today = styled.div`
    height: 40vh;
    background-color: ${props => props.color};
`;

export const Tomorrow = styled.div`
    height: 20vh;
    background-color: ${props => props.color};
`;

export const AfterTomorrow = styled.div`
    height: 20vh;
    background-color: ${props => props.color};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;