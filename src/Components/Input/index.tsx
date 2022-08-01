import React, { useState } from 'react'

import { ReactComponent as CompassIcon } from '../../Assets/Icons/44.svg'
import { useDebounce } from '../../Hooks/useDebounce'

interface Props {
  setUserInputLocality: Function;
}

export const Input = ({ setUserInputLocality }: Props) => {
  const [displayValue, setDisplayValue] = useState('')

  const debouncedChange = useDebounce(setUserInputLocality, 500)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value)
    debouncedChange(event.target.value)
  }

  return (
    <section className='bg-amber-400 opacity-80 h-1/5'>
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
