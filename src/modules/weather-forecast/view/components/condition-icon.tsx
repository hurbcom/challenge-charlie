interface Props {
  icon?: string
}

export const ConditionIcon = ({ icon }: Props) => {
  let path = '/icons/1.svg'

  if (icon) path = `/icons/${icon}`

  return <img src={path} alt={icon} className='icon' />
}
