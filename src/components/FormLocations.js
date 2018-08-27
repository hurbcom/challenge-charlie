import React, { Component } from 'react';
import Weather from './Weather';

class FormLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            unit: 'c',
            weather: { count: 0 },
        };
        this.submit = this.submit.bind(this);
        this.toggleUnit = this.toggleUnit.bind(this);
    }

    submit(e) {
        e.preventDefault();

        const { location, unit } = this.state;
        const params = { location, unit };

        this.getWeather(params);
    }

    toggleUnit() {
        const { location, unit } = this.state;
        const params = {
            location: location,
            unit: unit === 'c' ? 'f' : 'c',
        };

        this.getWeather(params);
    }

    getWeather(params) {
        fetch(
            `http://localhost:3000/api/wheater?location=${
                params.location
            }&unit=${params.unit}`
        )
            .then(body => body.json())
            .then(res =>
                this.setState({
                    unit: params.unit,
                    weather: { ...res },
                })
            );
    }

    render() {
        const { unit, weather } = this.state;

        return (
            <div className="FormLocations">
                <form
                    className="FormLocations__form"
                    onSubmit={this.submit}
                >
                    <input
                        className="FormLocations__form__input"
                        onChange={e =>
                            this.setState({
                                location: e.target.value,
                            })
                        }
                        placeholder="Digite uma cidade"
                        type="text"
                    />
                    <button className="FormLocations__form__button">
                        Ok
                    </button>
                </form>
                {weather.count > 0 && (
                    <Weather
                        toggleUnit={this.toggleUnit}
                        unit={unit}
                        {...weather}
                    />
                )}
            </div>
        );
    }
}

export default FormLocations;
