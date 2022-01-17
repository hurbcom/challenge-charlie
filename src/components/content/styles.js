import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 30px;
    border-radius: 16px;
    font-size: calc(8px + 1.5vmin);
    width: ${(props) => props.size};
`

export const StyledInput = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    padding: 5px;
    border-radius: 0 8px 8px 0;
    background-color: #ffffffba;

    :focus-visible {
        outline: none;
    }
`
