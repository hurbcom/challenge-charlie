import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: url(${props => props.imageUrl ? props.imageUrl : ""});
    background-position: center;
    background-size: cover;
    align-items: center;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: linear-gradient(transparent, rgba(0,0,0,0.5) 90%);
    color: white;
    padding: 1.25rem 0.625rem 0.625rem 0.625rem;
    font-size: 0.75rem;
    box-sizing: border-box;
`;