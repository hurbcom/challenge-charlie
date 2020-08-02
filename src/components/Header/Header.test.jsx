import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

beforeEach(() => {
  render(<Header onCityChanged={() => {}} />)
})

it('renders without crashing', () => {
  expect(screen.getByTestId('input-header')).toBeInTheDocument()
})
