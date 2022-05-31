import React, { useState}  from "react";
import './style.css'

export default function Search (props){

const [ newLocation,setNewLocation ] = useState('');

const locationRecieved= props.curCity && props.curState ? 
                        props.curCity + ', ' + props.curState:
                        'Carregando..';


// Pegando a cidade que o usuário informou (sem considerar acentos pois a API não aceita acentos)
let handleChange = (event) => {
    setNewLocation(event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
}

// Enviando a informação da localidade escolhida pelo usuário para fora do componente Search
// Vou usar a informação do novo lugar para chamar, novamente, a função de previsão do tempo
let handleSubmit =(event) => {
    if(newLocation !== ''){
        event.preventDefault()
        props.setLocation(newLocation)
    }else{
        event.preventDefault()
    }
}

    return (
        <form onSubmit={handleSubmit} className="search__container">
            <i className="search__icon" data-icon="("></i>
            <input autoFocus={true} onChange={handleChange} value={newLocation} type="text" placeholder={props.gotCurrentLocation ? locationRecieved : "Usuário não ativou locaização.."}/>
        </form>
    )
}