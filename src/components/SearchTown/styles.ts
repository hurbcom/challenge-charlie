import styled from "styled-components";

export const SearchTown = styled.form`
    padding: 0.5rem;
    background: linear-gradient(
        160deg,
        rgba(240, 235, 231, 1),
        rgba(240, 235, 231, 1),
        rgba(240, 235, 231, 1),
        rgba(240, 235, 231, 0.95),
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 0.6)
    );
`

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.img`
    width: 3rem;
    height: 3rem;

    @media (max-width: 520px) {
        width: 2rem;
        height: 2rem;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 0;

    background-color: transparent;
    color: #8A8987;
    font-size: 1.8rem;
    font-weight: 700;

    &:focus {
        outline: none;
    }

    @media (max-width: 520px) {
        font-size: 1.2rem;
    }
`