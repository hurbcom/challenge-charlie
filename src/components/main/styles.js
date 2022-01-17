import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: calc(8px + 1vmin);
    background: ${(props) =>
        props.image ? `url(https://bing.com/${props.image})` : '#7bb6dd'};
`
