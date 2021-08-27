import styled from "styled-components";

export const StyledInputContainer = styled.div`
    position: relative;
    input {
        width: 100%;
        height: 80px;
        font-size: 25px;
        padding: 0 20px 0 60px;
        border: none;
        font-weight: 700;
        outline: none;
        box-shadow: 1px 1px 2px 2px #0000002b;
        color: #7e7a79;
        @media (min-width: 1024px) {
            height: 120px;
            font-size: 40px;
            padding: 0 40px 0 100px;
            font-size: 30px;
        }
        @media (min-width: 1366px) {
            height: 160px;
            font-size: 50px;
            padding: 0 80px 0 150px;
        }
    }
    .icon {
        display: flex;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
        color: #7e7a79;
        font-size: 30px;
        @media (min-width: 1024px) {
            left: 25px;
            font-size: 55px;
        }
        @media (min-width: 1366px) {
            font-size: 100px;
        }
    }
`;

export const StyledDropdown = styled.div`
    background-color: #fff;
    position: absolute;
    z-index: 2;
    width: 100%;
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

export const StyledError = styled.div`
    width: 100%;
    height: 160px;
    font-size: 16px;
    color: #ff3e48;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        to right,
        rgba(40, 40, 40, 0.9) 0%,
        rgba(70, 70, 70, 0.9) 100%
    );
    padding: 0 10%;
`;
