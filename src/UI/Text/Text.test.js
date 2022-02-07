import React from 'react'
import { render } from '@testing-library/react'
import Text from './Text'

describe('Container', () => {
  test('matches snapshot', () => {
    const { container } = render(<Text />)
    expect(container).toMatchSnapshot()
  })
})
