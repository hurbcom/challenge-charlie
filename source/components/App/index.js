import style from './style.css';
import React from 'react';

import WeatherContainer from '../../containers/Weather';

class App extends React.Component {
    render() {
        return (
            <div
                className={style.app}
                style={{
                    backgroundImage: `url('${this.props.backgroundImage}')`,
                }}>
                <WeatherContainer />
            </div>
        );
    }
}

export default App;
