import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100%;
    background-image: url(${(props) => props.backgroundUrl});
`;

export const DashBoardStyle = styled.div`
    display: flex;
    min-width: 100%;
    width: max-content;
    height: 100vh;
`
