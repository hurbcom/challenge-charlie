import React, { Component } from 'react';
import { connect } from 'react-redux';
// Action(s)
import * as actions from '../actions';
import SearchSvg from '../assets/images/search.svg';
// Component
import WeatherCity from '../components/Weather';
import Spinner from '../components/Spinner';

// Para temperaturas abaixo de 15ºC deve ser usado tons de azul,
// para temperaturas acima de 35ºC deve ser usado tons de vermelho
// e use tons de amarelo para as demais temperaturas
class App extends Component {
    state = { inputFocused: false, city: '', convertedTemp: true };

    componentDidMount() {
        this.askForPosition().then(({ latitude, longitude }) => this.props.fetchLatLongWeather(latitude, longitude));
        this.props.fetchBingData();
        this.props.fetchCityWeather();
    }

    askForPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords), error => reject(error));
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchCityWeather(this.state.city);
    };

    handleConvertTemp = () => {
        this.setState({ convertedTemp: !this.state.convertedTemp });
    };

    render() {
        const { city, loading, bkgImg } = this.props;
        const { convertedTemp } = this.state;

        return (
            <main
                className="main"
                style={{
                    backgroundImage: `url(${bkgImg.image})`
                }}
            >
                <div className={`backdrop ${this.state.inputFocused ? 'backdrop--active' : ''}`} />
                <section className="container home">
                    <h1 className="home__name">Charlie Weather</h1>
                    <form className="search" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="search__input"
                            onChange={e => this.setState({ city: e.target.value })}
                            placeholder="Search for a city"
                            onFocus={() => this.setState({ inputFocused: true })}
                            onBlur={() => this.setState({ inputFocused: false })}
                        />
                        <button className="search__button" type="submit">
                            <img src={SearchSvg} alt="ButtonSearch" />
                        </button>
                    </form>
                    {loading ? (
                        <Spinner />
                    ) : Object.keys(city).length <= 1 ? (
                        <h1 className="heading-1 error-text">Oops!</h1>
                    ) : (
                        <div className="weather-box">
                            <div className="weather-box__header">
                                <h2 className="heading-2">{city.location.city}</h2>
                                <div className="weather-box__header__group">
                                    <h4 className="heading-4">{city.location.country}</h4>
                                    <h4 className="heading-4">{city.lastBuildDate}</h4>
                                </div>
                            </div>
                            <div className="animate-top">
                                {city.item.forecast.map((day, i) => {
                                    if (i < 3) {
                                        return (
                                            <WeatherCity
                                                key={i}
                                                convertTemp={this.handleConvertTemp}
                                                cityWeather={{ day, city }}
                                                index={i}
                                                tempFormatted={convertedTemp}
                                            />
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    )}
                </section>
            </main>
        );
    }
}

const stateToProps = ({ weather }) => weather;

export default connect(
    stateToProps,
    actions
)(App);
