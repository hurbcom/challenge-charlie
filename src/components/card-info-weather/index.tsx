import { FC, memo } from 'react'

export const Component: FC = ({ children }) => {
  return <div className="col-span-4 flex flex-col">{children}</div>
}

export const CardInfoWeather: FC = memo(Component)
