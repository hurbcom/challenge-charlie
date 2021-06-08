import styled from 'styled-components';

interface BackgroundProps {
    bg?: any;
}
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: ${(props: BackgroundProps) =>
        props.bg ? `url(https://www.bing.com${props.bg})` : '#fffff'};

    width: 100%;
    height: 100vh;
`;
