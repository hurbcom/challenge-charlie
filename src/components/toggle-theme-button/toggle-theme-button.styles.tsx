import styled from 'styled-components'

export const IconButton = styled.div`
    cursor: pointer;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    padding: 8px;
    background-color: ${(props) =>
        props.theme.typography.colors.contrastBackground};
    transition: all 0.3s;
`
