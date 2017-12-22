import style from './style.css';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div
                className={style.app}
                style={{
                    backgroundImage: `url('${this.props.backgroundImage}')`,
                }}>
                Hello World
            </div>
        );
    }
}

export default App;
