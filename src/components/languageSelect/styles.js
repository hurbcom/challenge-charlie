import styled from 'styled-components'

export const Container = styled.div`
    top: 0;
    width: 100%;
    display: flex;
    position: fixed;
    justify-content: right;
`

export const Content = styled.div`
    background: #7bb6ddc4;
    border-radius: 8px;
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
    display: flex;
    padding: 6px;
    cursor: pointer;

    img {
        margin-left: 5px;
        width: ${(props) => (props.isMobile ? '20' : '25')}px;
        margin-top: ${(props) =>
            props.isPortuguese ? 'none' : props.isMobile ? 'none' : '-3px'};
    }
`
