import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;

    > div {
        display: flex;
        padding: 10px;
    }

    img {
        width: 25px;
        cursor: pointer;
        margin-left: 5px;
        margin-top: ${(props) => (props.isPortuguese ? `none` : '-3px')};
    }
`
