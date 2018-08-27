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
        //Utilização do cors.io para contornar o acesso boloquei de CORS
        let bingUrl =
            'https://cors.io?https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
        axios.get(bingUrl).then(res => {
            let bgImage = 'https://www.bing.com' + res.data.images[0].url;
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
