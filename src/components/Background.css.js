import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: url(${props => props.imageUrl ? props.imageUrl : ""});
    background-position: center;
    background-size: cover;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: linear-gradient(transparent, rgba(0,0,0,0.5) 90%);
    color: white;
    padding: 20px 10px 10px 10px;
    font-size: 12px;
    box-sizing: border-box;
`;