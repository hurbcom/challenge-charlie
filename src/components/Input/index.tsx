import { forwardRef, ForwardRefRenderFunction } from 'react'

import { InputProps } from '@chakra-ui/react'

import * as S from './styles'

interface InputContentProps extends InputProps {}

const InputComponentForm: ForwardRefRenderFunction<
  HTMLInputElement,
  InputContentProps
> = ({ ...rest }, ref) => {
  return (
    <S.InputGroup>
      <S.InputLeftElement>
        <S.Icon />
      </S.InputLeftElement>

      <S.Input ref={ref} list="search-suggestions" {...rest} />

      <datalist id="search-suggestions">
        <option value={'Itapetininga, São Paulo'} />
      </datalist>
    </S.InputGroup>
  )
}

export const Input = forwardRef(InputComponentForm)
