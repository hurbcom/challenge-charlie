import styled from 'styled-components';

export const Container = styled.main<{ bgImage: any }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: ${({ bgImage }) =>
        bgImage
            ? `center / cover no-repeat linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bgImage})`
            : 'linear-gradient(#6698CB, #69B4C9)'};
`;
