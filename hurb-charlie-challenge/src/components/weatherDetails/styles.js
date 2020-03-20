import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    position: absolute;
    flex-direction: column;
    > div {
        display: flex;
        align-items: center;
        background: yellow;

        > div {
            justify-content: space-between;
            width: 200px;
        }
    }

    div {
    }

    img {
        width: 100px;
        height: 100px;
    }

    span {
        text-decoration: bold;
    }
`;
