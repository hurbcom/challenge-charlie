import React from 'react'
import { render } from '@testing-library/react'
import Container from './Container'

describe('Container', () => {
  test('matches snapshot', () => {
    const { container } = render(<Container />)
    expect(container).toMatchSnapshot()
  })
})
