import { render, screen } from '@testing-library/react'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the heading', () => {
    const { container } = render(<Loader />)

    expect(screen.getByRole('heading', { name: /Loader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
