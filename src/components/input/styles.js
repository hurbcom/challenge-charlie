import styled from 'styled-components'

export const StyledInput = styled.input`
    width: -webkit-fill-available;
    height: 30px;
    border: none;
    padding: 5px;
    background-color: #ffffffba;

    /* Firefox */
    width: -moz-available;

    /* Safari */
    margin: 0;
    outline: none;

    :focus-visible {
        outline: none;
    }

    :focus {
    }
`
export const Container = styled.form`
    display: flex;
    margin-bottom: 20px;
`
export const Icon = styled.img`
    width: 25px;
    padding: 0 10px;
    background-color: #ffffffba;
    border-radius: 8px 0 0 8px;
`
export const Button = styled.img`
    width: 25px;
    cursor: pointer;
    padding: 0 10px;
    background-color: #ffffffba;
    border-radius: 0 8px 8px 0;
`
