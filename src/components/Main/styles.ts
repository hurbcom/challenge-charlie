import styled from 'styled-components';

export const Container = styled.main<{ bgImage: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: center / cover no-repeat
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${({ bgImage }) => bgImage || ''});
`;
