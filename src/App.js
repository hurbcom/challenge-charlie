import React, { useEffect, useState } from 'react';
import './app.scss';
import locationService from './services/locationService';

function App() {
    const [backgroundUrl, setBackgroundUrl] = useState('');

    function fetchBackground() {
        fetch('/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US')
            .then((response) => response.json())
            .then((json) => {
                setBackgroundUrl(`${process.env.REACT_APP_BING_URL}/${json.images[0].url}`);
            });
    }

    useEffect(fetchBackground, []);

    return (
        <div id="app">
            <div
              id="background"
              style={{ backgroundImage: `url("${backgroundUrl}")` }}
            >
                <div style={{
                    width: '20%',
                }}
                />
            </div>
        </div>
    );
}

export default App;
