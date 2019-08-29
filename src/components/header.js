import React, { PureComponent, Fragment } from 'react'

import '../styles/header.less'

export class Header extends PureComponent {
  render () {
    const { userLocation } = this.props
    return (
      <header className="app-header">
        <h1>
          {userLocation ? (
            <Fragment>
              <i data-icon="(" />
              {userLocation.city}, {userLocation.state}
            </Fragment>
          ) : (
            'Buscando informações...'
          )}
        </h1>
      </header>
    )
  }
}
