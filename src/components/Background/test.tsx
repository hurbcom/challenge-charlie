import { render, screen } from '@testing-library/react'

import Background from '.'

describe('<Background />', () => {
  it('should render the heading', () => {
    const { container } = render(<Background />)

    expect(
      screen.getByRole('heading', { name: /Background/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
