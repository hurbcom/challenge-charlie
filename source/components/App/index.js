import style from './style.css';
import React from 'react';

import Weather from '../Weather';

class App extends React.Component {
    render() {
        return (
            <div
                className={style.app}
                style={{
                    backgroundImage: `url('${this.props.backgroundImage}')`,
                }}>
                <Weather />
            </div>
        );
    }
}

export default App;
