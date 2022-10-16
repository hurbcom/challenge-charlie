import styled from "styled-components";

export const OptionsTown = styled.ul`
    position: absolute;
    margin-top: 0.5rem;
    padding: 0;

    width: 36rem;

    @media (max-width: 520px) {
        width: 100%;
    }

    background: linear-gradient(
        60deg,
        rgba(240, 235, 231, 1),
        rgba(240, 235, 231, 1),
        rgba(240, 235, 231, 0.95),
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 0.3)
    );
`

export const ItemList = styled.li`
    padding: 0.3rem 1.5rem;
    list-style-type: none;

    font-size: 1.2rem;
    color: #636361;

    &:hover {
        background: linear-gradient(
            60deg,
            rgba(199, 195, 192, 1),
            rgba(199, 195, 192, 0.75),
            rgba(255, 255, 255, 0.35)
        );
        cursor: pointer;
    }
`
