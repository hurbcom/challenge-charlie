import React, { Component } from 'react';
import './App.css';

export default class BingBg extends Component {
  componentDidMount () {
    fetch('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR', {
      mode: 'no-cors'
    })
    .then((response) => response.json())
    .then((response) => this.setImageBing(`https://www.bing.com/${response.images[0].url}`))
    .catch((error) => {
      this.setImageBing('https://www.bing.com/az/hprichbg/rb/LAUnionStation_PT-BR9199909903_1920x1080.jpg')
      console.log(error)
    })
  }

  setImageBing = (image) => {
    this.refs.bingBg.style.backgroundImage = `url(${image})`
  }

  render() {
    return <div className="bing-bg" ref="bingBg" />
  }
}