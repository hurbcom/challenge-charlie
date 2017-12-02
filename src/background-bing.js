import React, { Component } from 'react';
import config from './config'
import './App.less';


export default class extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        background: config.defaultBackground
      }
  };

  componentDidMount () {
    fetch('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR', {mode: 'no-cors'})
    .then((response) => response.json())
    .then((response) => this.setState({loading: false, background: `https://www.bing.com/${response.images[0].url}`}))
    .catch((error) => this.setState({loading: false}))
  }

  render() {
    const {loading, background} = this.state
    return <div className="bing-bg" style={{backgroundImage: !loading && `url(${background})`}} />
  }
}