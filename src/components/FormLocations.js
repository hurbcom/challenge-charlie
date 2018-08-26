import React, { Component } from 'react';

class FormLocations extends Component {
    render() {
        return (
            <div className="FormLocations">
                <input
                    className="FormLocations__input"
                    placeholder="Digite uma cidade"
                    type="text"
                />
            </div>
        );
    }
}

export default FormLocations;
