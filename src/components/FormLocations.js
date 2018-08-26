import React, { Component } from 'react';
import Weather from './Weather';

class FormLocations extends Component {
    constructor(props) {
        super(props);
        this.state = { location: null, weather: { count: 0 } };
        this.getWheater = this.getWheater.bind(this);
    }
    getWheater() {
        const { location } = this.state;
        fetch(
            `http://localhost:3000/api/wheater?location=${location}`
        )
            .then(body => body.json())
            .then(res => this.setState({ weather: { ...res } }));
    }
    render() {
        const { weather } = this.state;

        return (
            <div className="FormLocations">
                <input
                    className="FormLocations__input"
                    onChange={e =>
                        this.setState({ location: e.target.value })
                    }
                    placeholder="Digite uma cidade"
                    type="text"
                />
                <button onClick={this.getWheater}>Ok</button>
                {weather.count > 0 && <Weather {...weather} />}
            </div>
        );
    }
}

export default FormLocations;
