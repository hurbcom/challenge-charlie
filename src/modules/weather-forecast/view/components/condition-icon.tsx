interface Props {
  icon?: string
}

export const ConditionIcon = ({ icon }: Props) => {
  if (!icon) return null

  const path = `/icons/${icon}`

  return <img src={path} alt={icon} className='icon' />
}
