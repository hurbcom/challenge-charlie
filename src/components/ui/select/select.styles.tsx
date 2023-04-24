import styled from 'styled-components'

export const CustomSelect = styled.div`
    position: relative;
`

export const Select = styled.select`
    height: 40px;
    padding: 0 8px;

    border: none;
    border-radius: 4px;
    background-color: ${(props) =>
        props.theme.typography.colors.contrastBackground};
`
