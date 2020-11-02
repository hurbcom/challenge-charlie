import { useState } from 'react'

import * as S from './styles'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>()

  const onChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const onPerformSearch = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    if (!searchTerm) return false
    console.log(searchTerm)
  }
  return (
    <S.Wrapper onSubmit={onPerformSearch}>
      <S.Input
        placeholder="País, Estado ou Cidade"
        onChange={onChangeInputSearch}
      />
      <S.Submit type="submit" value="buscar" />
    </S.Wrapper>
  )
}

export default SearchBar
