import React, { useState } from "react";
import './style.css'

export default function Search(props) {

    const [newLocation, setNewLocation] = useState(props.userLocation.city);

    // Pegando a cidade que o usuário informou
    const handleChange = (event) => {
        setNewLocation(event.target.value)
    }

    // Enviando a informação da localidade escolhida pelo usuário para fora do componente Search
    // Vou usar a informação do novo lugar para chamar, novamente, a função de previsão do tempo
    const handleSubmit = (event) => {
        if (newLocation !== '') {
            event.preventDefault()
            props.setLocation(newLocation)
        } else {
            return
        }
    }

    return (
        <form onSubmit={handleSubmit} className="search__container">
            <i className="search__icon" data-icon="("></i>
            <input
                onChange={handleChange}
                value={newLocation}
                type="text"
                placeholder="Digite uma localidade.."
            />
        </form>
    )
}