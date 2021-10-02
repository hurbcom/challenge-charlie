import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/Main';
import WeatherBox from 'components/WeatherBox';
import { GlobalStyle } from 'theme';

ReactDOM.render(
    <React.StrictMode>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap"
                rel="stylesheet"
            />
        </head>
        <GlobalStyle />
        <Main>
            <WeatherBox />
        </Main>
    </React.StrictMode>,
    document.getElementById('root')
);
