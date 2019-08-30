import React, { PureComponent, Fragment } from 'react'

import '../styles/header.less'

export class Header extends PureComponent {
  render () {
    const { userLocation, error } = this.props
    return (
      <header className="app-header">
        <h1>
          {userLocation ? (
            <Fragment>
              <i data-icon="(" />
              {userLocation.city}, {userLocation.state}
            </Fragment>
          ) : (
            error ? (
              <span>
                Não foi possível carregar as informações :(<br /><br />Atualize a página...
              </span>
            ) : (
              'Buscando localidade...'
            )
          )}
        </h1>
      </header>
    )
  }
}
