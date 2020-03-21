import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    position: absolute;
    height: 500px;
    > div {
        display: flex;
        align-items: center;
        background: yellow;
        > div {
            width: 300px;
        }
    }

    img {
        width: 100px;
        height: 100px;
    }

    span {
        text-decoration: bold;
    }
`;
