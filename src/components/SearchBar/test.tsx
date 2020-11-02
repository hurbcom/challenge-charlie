import { render, screen } from '@testing-library/react'

import SearchBar from '.'

describe('<SearchBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<SearchBar />)

    expect(
      screen.getByRole('heading', { name: /Hello Hurb!/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
