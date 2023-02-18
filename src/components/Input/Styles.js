import styled from "styled-components";

export const Container = styled.div`
background-color: rgba(242, 237, 234, 0.9);
padding: 20px 15px;
display: flex;

input {
    &:focus-visible {
        outline-offset: 0px;
        border: 0px;
        outline: 0px;
    }
    color: #8D8986;
    font-size: 25px;
    background-color: transparent;
    border: 0px;
    margin-left: 10px;
    width: 100%;
}
`