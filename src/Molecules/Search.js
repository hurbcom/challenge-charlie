import React, { useState, useContext, useRef, useEffect } from 'react';
import { ThemeContext } from './ThemeContext'
import debounce from "lodash.debounce";
import SearchIcon from "../svg/SearchIcon";

function Search() {
  const [inputCity, setInputCity] = useState("");
  const sendValue = (value) => setInputCity(value);
  const [inputValue, setInputValue] = useState("");
  const [notValidate, setNotValidate] = useState(false);
  const [validate, setValidate] = useState(false);

  // debounce input
  const delayedValue = useRef(debounce(value => sendValue(value), 100)).current;
  const onChange = e => {
    setInputValue(e.target.value);
    delayedValue(e.target.value);
  };
  const { ChangeCity } = useContext(ThemeContext);

  const SetEnterSearch = (e) => {
    // This funcion validates if onKeyPress (button Enter) is invalid
    setValidate(true);
    setTimeout(()=>{
      if (!notValidate) {
        if (e.key === 'Enter') {
          ChangeCity(inputCity)
        } 
      }
    }, 500)
  }

  useEffect(()=> {
    // This funcion validates the input, just letters
    const ValidateInput = () => {
      const regex = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
      regex.test(inputCity) && inputValue.length > 0 ? setNotValidate(false) : setNotValidate(true); 
    }
    if (validate) ValidateInput()
    
  },[inputCity, inputValue, validate])
  
  return (
    <div className="search">
      <label className={`search__label ${(notValidate ? "search__label--error" : "")}`}>
        <input className="search__input" type="text" placeholder="Cidade" onChange={onChange} value={inputValue} onKeyPress={event => SetEnterSearch(event)} />
        <button className="search__btn"
          onClick={() => ChangeCity(inputCity, !notValidate) }
        >
          <SearchIcon />
        </button>
      </label>
      {
        notValidate ? 
        <span className="search__error"> Por favor digite o nome de uma cidade </span>: null
      }
    </div>
  )
}

export default Search;
