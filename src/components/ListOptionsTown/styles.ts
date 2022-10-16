import styled from "styled-components";

export const OptionsTown = styled.ul`
    position: absolute;
    margin-top: 0.5rem;
    padding: 0;

    width: 36rem;

    @media (max-width: 520px) {
        width: 100%;
    }

    background-color: #F0EBE7;
    opacity: 0.9;
`

export const ItemList = styled.li`
    padding: 0.3rem 1.5rem;
    list-style-type: none;

    font-size: 1.2rem;
    color: #636361;

    &:hover {
        background-color: #C4C0BD;
        color: #575755;
        cursor: pointer;
    }
`
