import { IBackgroundImageViewModel } from '../interfaces'

interface Props {
  viewModel: IBackgroundImageViewModel
}

export const BackgroundImageView = ({ viewModel }: Props) => {
  const { backgroundImage } = viewModel

  return (
    <div className='background-image'>
      {backgroundImage.url !== '' ? (
        <img src={backgroundImage.url} alt={backgroundImage.attribution} />
      ) : null}
    </div>
  )
}
