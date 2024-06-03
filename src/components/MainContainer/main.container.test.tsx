import React from 'react'
import { render, screen } from '@testing-library/react'
import MainContainer from '@/components/MainContainer/main.container'

describe('test for MainContainer Component', () => {
  it('should render with the correct background image', () => {
    const background = 'mock-background.jpg'
    render(<MainContainer background={background}>Test</MainContainer>)

    const container = screen.getByTestId('main-container')
    expect(container).toHaveStyle(`background-image: url(https://bing.com/${background})`)
  })

  it('should render its children correctly', () => {
    const background = 'mock-background.jpg'
    render(<MainContainer background={background}>Test</MainContainer>)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
