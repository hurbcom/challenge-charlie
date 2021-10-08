import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/Main';
import WeatherBox from 'components/WeatherBox';
import { GlobalStyle } from 'theme';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Main>
            <WeatherBox />
        </Main>
    </React.StrictMode>,
    document.getElementById('root')
);
