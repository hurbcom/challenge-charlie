import styled from 'styled-components';

export const Container = styled.div`
    flex: 0.6;
    width: 40%;
    opacity: 0.85;
    background: ${props => props.background};
    > div {
        border-radius: 4px;
        justify-content: space-between;
        display: flex;
        align-items: center;
        height: 300px;
        > div {
            width: 200px;
            height: 230px;
        }
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }
    img {
        margin-top: 40px;
        width: 60%;
    }
    strong {
        color: rgb(250, 250, 250);
    }
`;

export const ImageIcon = styled.img``;
