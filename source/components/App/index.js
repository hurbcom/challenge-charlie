import Style from './style.css';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className={Style.red}>
                Hello World
            </div>
        );
    }
}

export default App;
