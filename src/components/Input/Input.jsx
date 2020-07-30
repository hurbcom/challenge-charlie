import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({ onChange, onSubmit, placeholder, text }) => (
  <input
    className={styles.input}
    id='locale-input'
    onChange={e => onChange(e.target.value)}
    onKeyUp={onSubmit}
    placeholder={placeholder}
    type='text'
    value={text}
  />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Input
