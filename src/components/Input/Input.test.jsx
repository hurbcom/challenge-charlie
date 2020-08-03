import React from 'react'
import Input from './Input'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
  render(<Input onChange={() => {}} onSubmit={() => {}} text='Bla' />)
})

it('renders without crashing', () => {
  expect(screen.getByRole('textbox')).toBeTruthy()
})
