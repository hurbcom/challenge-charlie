import React from 'react';

const Form = ({ location, setInput, onSubmit }) => (
    <form className="FormLocations__form" onSubmit={e => onSubmit(e)}>
        <input
            className="FormLocations__form__input"
            onChange={e => setInput(e.target.value)}
            placeholder="Digite uma cidade"
            type="text"
            defaultValue={location}
        />
        <button className="FormLocations__form__button">Ok</button>
    </form>
);

export default Form;
