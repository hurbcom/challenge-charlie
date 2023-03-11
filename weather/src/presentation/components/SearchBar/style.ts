import styled from "styled-components";


export const LocationInput = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    background-color: #F2EDEA;
    padding: 0 3px;

    @media (min-width: 470px){
        height: 100px;
        padding-left: 13px;
    }
`;

export const InputContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const Input = styled.input`
    border: none;
    background: none;
    width: 100%;
    height: 95%;
    font: 600 24px 'Roboto', sans-serif;

    color: #8D8A87;

    &:focus {
        outline-style: none;
    }

    @media (min-width: 470px) {
        font-size: 34px;
    }
`;