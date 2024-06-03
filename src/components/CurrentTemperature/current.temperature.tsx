import React from 'react'
import { handleTemperature } from '@/utils/utils'

interface CurrentTemperatureProps {
    temperature: number
    label: string
    showCelsius: boolean
    setShowCelsius: React.Dispatch<React.SetStateAction<boolean>>
}

function CurrentTemperature(props: CurrentTemperatureProps) {
  const { temperature, label, showCelsius, setShowCelsius } = props

  return (
    <div className="flex flex-col items-start justify-start">
        <span className='md:text-[1.5rem] text-[1rem]'>{label}</span>
        <div className='flex flex-col md:items-center items-start justify-center md:flex-row'>
            <span className='md:text-[1.8rem] text-[1.2rem]'>
                {handleTemperature(temperature, showCelsius)}
                {showCelsius ? '°C' : '°F'}
            </span>
            <button className='md:ml-2 text-xs italic' onClick={() => [setShowCelsius(!showCelsius), handleTemperature(temperature, showCelsius)]}>
                {showCelsius ? 'Fahrenheit' : 'Celsius'}
            </button>
        </div>
    </div>
  )
}

export default CurrentTemperature
