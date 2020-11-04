import { useState } from 'react'

import * as S from './styles'

interface Props {
  onPerformSearch: (searchTerm: string) => void
}

const SearchBar = ({ onPerformSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    searchTerm: string
  ) => {
    e.preventDefault()
    onPerformSearch(searchTerm)
  }

  return (
    <S.Wrapper onSubmit={(e) => handleSubmit(e, searchTerm)}>
      <S.Input
        placeholder="País, Estado ou Cidade"
        onChange={onChangeInputSearch}
      />
      <S.Submit type="submit" value="buscar" />
    </S.Wrapper>
  )
}

export default SearchBar
