import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgBing: ''
        };
    }

    componentDidMount() {
        axios.get('https://bingwallpaper.herokuapp.com').then(res => {
            let bgImage = res.data;
            console.log(res);
            this.setState({
                bgBing: bgImage
            });
        });
    }
    render() {
        let sytleBg = {
            backgroundImage: `url(${this.state.bgBing})`,
            width: '100%',
            height: '100vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        };
        return <div className="App" style={sytleBg} />;
    }
}

export default App;
