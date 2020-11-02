import { render, screen } from '@testing-library/react'

import WeatherCard from '.'

describe('<WeatherCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<WeatherCard />)

    expect(screen.getByRole('heading', { name: /WeatherCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
