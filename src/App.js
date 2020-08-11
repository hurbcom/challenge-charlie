import React from 'react';

import Background from './components/Background';
import Weather from './components/Weather';

import themes from './themes';
import OpenCage from './services/opencage';
import OpenWeather from './services/openweather';

import GlobalStyle from './App.css.js';


function App() {
    const OpenWeatherApi = new OpenWeather('7ba73e0eb8efe773ed08bfd0627f07b8');
    const OpenCageApi = new OpenCage('c63386b4f77e46de817bdf94f552cddf');

    return (
        <React.Fragment>
            <GlobalStyle />
            <Background>
                <Weather
                    themes={themes}
                    opencage={OpenCageApi}
                    openweather={OpenWeatherApi}
                />
            </Background>
        </React.Fragment>
    );
}

export default App;