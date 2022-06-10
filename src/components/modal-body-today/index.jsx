
import React, { useEffect, useState } from "react"
import './style.scss'
const ModalBodyToday = props => {
    const { data } = props

    const [celsiusTemp, setCelsiusTemp] = useState('')
    const [fahrenheitTemp, setFahrenheitTemp] = useState('')
 

    const celsiusToFahrenheit = (celsiusTemp) => {
        return (celsiusTemp * 9 / 5 + 32).toFixed(2)

    }

    useEffect(() => {

        if (data.main) {
            const celsius = data.main.temp
            const fahrenheit = celsiusToFahrenheit(celsius)
            setFahrenheitTemp(fahrenheit)
            setCelsiusTemp(celsius)

        }
    })

    return (
        <div className="modal-body-container">
            
        </div>
    )
}


export default ModalBodyToday