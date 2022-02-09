import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

export const theme = {
  breakpoint: {
    xs: '424px',
    sm: '600px',
  },
}

const Template = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Template.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Template
