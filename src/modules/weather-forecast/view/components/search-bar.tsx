import { useState } from 'react'

interface Props {
  initialValue: string
  onSearch: (city: string) => void
}

export const SearchBar = ({ initialValue = '', onSearch }: Props) => {
  const [city, setCity] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const handleSearch = () => {
    onSearch(city.trim())
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='row search-bar'>
      <img src='/icons/compass.svg' alt='compass' width='30' />

      <input
        value={city}
        placeholder='Cidade'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
