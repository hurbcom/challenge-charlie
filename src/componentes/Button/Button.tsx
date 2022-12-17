import React from 'react'
import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
    variant?: ButtonVariant
}
export function Button({ variant = 'primary' }: ButtonProps) {
    return <ButtonContainer className='teste' variant={variant} onClick={() => console.log('enviou')
    }> Enviar</ButtonContainer >
}