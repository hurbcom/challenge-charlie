import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

beforeEach(() => {
  render(<Header onCityChanged={() => {}} />)
})

it('renders without crashing', () => {
  expect(screen.getByTestId('input-header')).toBeInTheDocument()
})

it('renders the compass icon', () => {
  expect(screen.getByTestId('label-icon')).toBeInTheDocument()
})

it('renders the input', () => {
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

it('renders input initially with the expected placeholder', () => {
  const target = 'Type in the location name'
  expect(screen.getByPlaceholderText(target)).toBeInTheDocument()
})

it('changes the input value when typing', () => {
  const onCityChanged = jest.fn()

  const value = 'São Paulo'
  const input = screen.getByRole('textbox')

  waitFor(() => {
    fireEvent.change(input, { target: { value } })
    fireEvent.keyDown(input, { keyCode: 13 })

    expect(input.textContent).toEqual(value)
    expect(onCityChanged).toHaveBeenCalled()
  })
})
