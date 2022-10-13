import styled from "styled-components";

export const SearchTown = styled.form`
    padding: 0.5rem;
    background-color: #F0EBE7;
`

export const Search = styled.div`
    display: flex;
`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.img`
    width: 1.8rem;
    height: 1.8rem;
`

export const Input = styled.input`
    border: 0;
    width: 100%;
    padding: 0.5rem;

    background-color: #F0EBE7;
    color: #848381;
    font-size: 1.2rem;
    font-weight: bold;

    &:focus {
        outline: none;
    }
`