import React from 'react'
import { render } from '@testing-library/react'
import { Template } from '../'
import Text from './Text'

describe('Test', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <Template>
        <Text />
      </Template>
    )
    expect(container).toMatchSnapshot()
  })
})
