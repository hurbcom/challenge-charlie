import React from 'react'
import CSS from 'csstype'

interface Props {
  icon?: React.ReactNode
  className?: string
  style?: CSS.Properties
}
export const WeatherDay: React.FC<Props> = ({
  children,
  icon,
  className,
  style
}) => {
  return (
    <div className={`p-4 grid grid-cols-12 pb-10 ${className}`} style={style}>
      <div className="col-span-8 flex justify-center">{icon}</div>
      <div className="col-span-4 flex flex-col">{children}</div>
    </div>
  )
}
