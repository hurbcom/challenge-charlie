import styled from 'styled-components';

export const Container = styled.div`
    flex: 0.65;
    width: 40%;

    > div {
        border-radius: 4px;
        justify-content: space-between;
        display: flex;
        align-items: center;
        background: yellow;
        height: 410px;
        > div {
            width: 200px;
        }
    }
    button {
        border: none;
        background: none;
    }
    img {
        width: 150%;
    }
`;
