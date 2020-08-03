import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.module.scss'

const Text = ({ children, onClick, size = 'normal' }) => (
  <p className={styles[size]} onClick={onClick}>
    {children}
  </p>
)

Text.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Text
