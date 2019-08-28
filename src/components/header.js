import React, { PureComponent } from 'react'

export class Header extends PureComponent {
  render () {
    const { userLocation } = this.props
    return (
      <header className="app-header">
        <h1>{userLocation ? `${userLocation.city}, ${userLocation.state}` : 'Buscando informações...'}</h1>
      </header>
    )
  }
}
