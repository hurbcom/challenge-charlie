import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: column;
    align-items: center;
    display: flex;
    height: 100%;
    background-image: ${props => props.background};
`;
