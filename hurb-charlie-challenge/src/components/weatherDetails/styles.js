import styled from 'styled-components';

export const Container = styled.div`
    flex: 0.5;
    width: 40%;

    > div {
        border-radius: 4px;
        justify-content: space-between;
        display: flex;
        align-items: center;
        background: yellow;
        height: 320px;
        > div {
            width: 200px;
        }
    }

    img {
        width: 100px;
        height: 100px;
    }
`;
