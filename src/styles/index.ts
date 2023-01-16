import styled, { css } from "styled-components";

type WrapperProps = {
    imageURL?: string;
};

export const Wrapper = styled.div<WrapperProps>`
    ${({ imageURL }) => css`
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${imageURL ? `url(${imageURL})` : "#3468fc"};
    `}
`;
