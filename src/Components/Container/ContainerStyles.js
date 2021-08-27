import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
    position: relative;
    z-index: 2;
    @media (min-width: 1024px) {
        max-width: 800px;
    }
    @media (min-width: 1366px) {
        max-width: 1075px;
    }
`;
