import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'neutral' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    neutral: 'gray',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;
background-color: ${props => `${buttonVariants[props.variant]}`}
`