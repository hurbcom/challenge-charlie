import React from 'react';

//escrevi dessa forma pois ela e stateless
const Search = props => (
        <form onSubmit={props.getWeather}>
        <input type = "text" name = "city" placeholder = "Escreva o nome da cidade"/>
        <button>Buscar</button>
        </form>
);

export default Search;