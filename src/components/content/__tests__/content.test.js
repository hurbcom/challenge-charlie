import React from 'react'
import { render } from '../../../setupTests'
import Content from '../'

test('should render correctly', () => {
    const { baseElement } = render(<Content />)
    expect(baseElement).toMatchSnapshot()
})
