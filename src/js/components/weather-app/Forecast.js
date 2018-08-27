import React, { Component } from 'react'

export default class Forecast extends Component {
  render() {
    return (
      <div className='forecast'>
        {this.props.children}
      </div>
    )
  }
}
