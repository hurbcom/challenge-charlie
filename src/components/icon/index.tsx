interface Props {
  path?: string
}

export const Icon = ({ path }: Props) => {
  if (!path) return null

  return <img src={path} alt='icon' className='icon' />
}
