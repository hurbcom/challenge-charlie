import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Home'
import Splash from './Splash'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Splash} />
                <Route exact path="/home" component={Home} />
            </Router>
        )
    }
}