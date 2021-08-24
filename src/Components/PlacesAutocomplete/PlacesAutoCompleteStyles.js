import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    height: 80px;
    font-size: 30px;
    padding: 0 20px 0 60px;
    border: none;
    font-weight: 700;
    outline: none;
    box-shadow: 1px 1px 2px 2px #0000002b;
    @media (min-width: 1024px) {
        height: 120px;
        font-size: 40px;
        padding: 0 40px 0 100px;
    }
    @media (min-width: 1366px) {
        height: 160px;
        font-size: 50px;
        padding: 0 80px 0 150px;
    }
`;

export const StyledSuggestions = styled.div`
    width: 100%;
    font-size: 16px;
    background-color: #fff;
    span {
        padding: 20px;
        cursor: pointer;
        display: block;
        &:hover {
            background-color: #dedede;
        }
    }
    .suggestion-item {
        &:--active {
            background: red;
        }
    }
    @media (min-width: 1024px) {
        font-size: 18px;
    }
    @media (min-width: 1366px) {
        font-size: 20px;
    }
`;
