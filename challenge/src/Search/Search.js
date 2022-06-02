import React, { useState } from "react";
import './style.css'

export default function Search(props) {

    const [newLocation, setNewLocation] = useState('');

    const locationRecieved = props.curCity && props.curState ?
        props.curCity + ', ' + props.curState :
        'Carregando..';


    // Pegando a cidade que o usuário informou (sem considerar acentos pois a API não aceita acentos)
    const handleChange = (event) => {
        setNewLocation(event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
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

            <input autoFocus={true} onChange={handleChange} value={newLocation} type="text" placeholder={props.isGeolocAllowed ? locationRecieved : 'Digite uma localidade..'} />
        </form>
    )
}