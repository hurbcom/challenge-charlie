import { render, screen } from '@testing-library/react'

import { Wallpaper } from '.'

const WallpaperData = {
  image: 'https://...',
  title: 'Descrição da imagem',
}

describe('Wallpaper component', () => {
  it('Renders correctly', () => {
    render(<Wallpaper data={WallpaperData} temperatureValue={undefined} />)

    expect(screen.getByAltText('Descrição da imagem')).toHaveAttribute(
      'src',
      'https://...',
    )
  })
})
