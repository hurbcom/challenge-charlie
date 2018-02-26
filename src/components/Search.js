import React from 'react';

//escrevi dessa forma pois ela e stateless
const Search = props => (
        <div className="search">
            <form onSubmit={props.getWeather}>
            <input type = "text" name = "city" placeholder = "Escreva o nome da cidade"/>
            <button>Buscar</button>
            </form>
        </div>
);

export default Search;