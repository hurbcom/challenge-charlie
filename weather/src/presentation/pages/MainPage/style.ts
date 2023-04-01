import styled from 'styled-components';

type Props = {
    imageURL?: string;
}

export const MainContainer = styled.div<Props>`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    position: relative;
    z-index: 1;
    
    > ::before {
        content: '';
        background-image: url(${props => props.imageURL});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0.7;
        z-index: -1;
    }

    > ::after {
        content: '';
        background-color: black;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.7;
        z-index: -1;
        opacity: 0.55;
    }

    @media (min-width: 470px) {
        padding: 0 10%;
    }
`

export const Content = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 570px;
    height: 100%;

    display: flex;
    flex-direction: column;
`;
