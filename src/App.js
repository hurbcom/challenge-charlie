import React, {Component} from 'react';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import WeatherPage from './components/WeatherPage/WeatherPage';

const featuredImage = require('./utils/FeaturedImage');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: ''
        }
    }
    componentWillMount() {
        featuredImage.get().then((res) => {
            this.setState({backgroundImage: res});
        }).catch((err) => {
            console.error(err);
        });
    }
    render() {
        return (<div className="App" style={{
                backgroundImage: `url(${this.state.backgroundImage})`
            }}>
            <WeatherPage/>
        </div>);
    }
}

export default App;
