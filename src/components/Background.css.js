import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 100vh;
    background: url(${props => props.imageUrl ? props.imageUrl : ""});
    background-position: center;
    background-size: cover;
`;