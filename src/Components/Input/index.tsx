import React, { useEffect, useState } from 'react'

import { ReactComponent as CompassIcon } from '../../Assets/Icons/Compass.svg'
import { useDebounce } from '../../Hooks/useDebounce'

interface Props {
  setUserInputLocality: Function
  userLocalityName: string
}

export const Input = ({ setUserInputLocality, userLocalityName }: Props) => {
  const [displayValue, setDisplayValue] = useState('')

  const debouncedChange = useDebounce(setUserInputLocality, 500)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value)
    debouncedChange(event.target.value)
  }

  useEffect(() => {
    setDisplayValue(userLocalityName)
  }, [userLocalityName])

  return (
    <section className='opacity-80'>
      <div className='relative'>
        <CompassIcon
          fill='#8C8A87'
          width={50}
          height={50}
          className='p-1 absolute box-border top-1/2 left-0.5 -translate-y-1/2 z-10'
        />
        <input
          type="text"
          className='w-full h-20 input-color opacity-80 box-border pl-14 text-2xl text-zinc-600 focus:outline-none'
          value={displayValue}
          onChange={onChange}
        />
      </div>
    </section>
  )
}
