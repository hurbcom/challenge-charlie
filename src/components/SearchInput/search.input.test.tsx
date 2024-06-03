import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchInput from '@/components/SearchInput/search.input'

describe('test for SearchInput Component', () => {
  const onSearchChangeMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render with the correct placeholder when loading', () => {
    render(
      <SearchInput
        onSearchChange={onSearchChangeMock}
        location={undefined}
        loading={true}
      />
    )

    expect(screen.getByPlaceholderText('Buscando...')).toBeInTheDocument()
  })

  it('should update the search input when location prop changes', () => {
    const { rerender } = render(
      <SearchInput
        onSearchChange={onSearchChangeMock}
        location="Rio de Janeiro"
        loading={false}
      />
    )

    expect(screen.getByDisplayValue('Rio de Janeiro')).toBeInTheDocument()

    rerender(
      <SearchInput
        onSearchChange={onSearchChangeMock}
        location="Minas Gerais"
        loading={false}
      />
    )

    expect(screen.getByDisplayValue('Minas Gerais')).toBeInTheDocument()
  })

  it('should call onSearchChange when Enter key is pressed', () => {
    render(
      <SearchInput
        onSearchChange={onSearchChangeMock}
        location={undefined}
        loading={false}
      />
    )

    const input = screen.getByPlaceholderText('Buscar cidade...')
    fireEvent.change(input, { target: { value: 'São Paulo' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(onSearchChangeMock).toHaveBeenCalledWith('São Paulo')
  })

  it('should clear input on click', () => {
    render(
      <SearchInput
        onSearchChange={onSearchChangeMock}
        location="Rio de Janeiro"
        loading={false}
      />
    )

    const container = screen.getByRole('textbox').parentElement
    fireEvent.click(container!)

    expect(screen.getByDisplayValue('')).toBeInTheDocument()
  })

  it('should disable input when loading', () => {
    render(
      <SearchInput
        onSearchChange={onSearchChangeMock}
        location={undefined}
        loading={true}
      />
    )

    const input = screen.getByPlaceholderText('Buscando...')
    expect(input).toBeDisabled()
  })
})
