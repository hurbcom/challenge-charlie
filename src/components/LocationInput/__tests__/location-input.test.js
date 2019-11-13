import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import LocationInput from '../index'

const setup = () => {
  const utils = render(<LocationInput />)
  const input = utils.getByLabelText('location-input')
  return {
    input,
    ...utils,
  }
}

test('It should inform a city name on input', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { location: 'Rio de Janeiro' } })
  expect(input.location).toBe('Rio de Janeiro')
})

test('It should inform a city and state on input', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { location: 'São Caetano do Sul, São Paulo' } })
  expect(input.location).toBe('São Caetano do Sul, São Paulo')
})

test('It should match the input snapshot', () => {
  const { input } = setup()
  expect(input).toMatchInlineSnapshot(`
    <input
      aria-label="location-input"
      placeholder="Informe a cidade..."
      type="text"
      value=""
    />
  `)
})

