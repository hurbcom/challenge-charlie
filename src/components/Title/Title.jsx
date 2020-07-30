import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.scss'

const Title = ({ children, uppercase, size = 'medium' }) => (
  <h1 className={`${styles[size]} ${uppercase ? styles.uppercase : ''}`}>{children}</h1>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  uppercase: PropTypes.bool,
}

export default Title
