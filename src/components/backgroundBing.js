import React, { Component } from 'react';
import config from '../config'
import './background-bing.less';

export default class extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        background: config.defaultBackground
      }
  };

  setResponseJson = (response) => {
    return response.json();
  };

  setDataBackground = (response) => {
    this.setState({
      loading: false, 
      background: `https://www.bing.com/${response.images[0].url}`
    });
  };

  resetLoading = (error) => {
    this.setState({loading: false});
  };

  componentDidMount () {
    fetch(config.bingUrl, {
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(this.setResponseJson)
    .then(this.setDataBackground)
    .catch(this.resetLoading)
  }

  render() {
    const {loading, background} = this.state
    return <div className='bing-bg' style={{backgroundImage: !loading && `url(${background})`}} />
  }
}