import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({ disabled, onChange, onSubmit, placeholder, text }) => (
  <input
    className={styles.input}
    disabled={disabled}
    id='locale-input'
    onChange={e => onChange(e.target.value)}
    onKeyUp={onSubmit}
    placeholder={placeholder}
    type='text'
    value={text}
  />
)

Input.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Input
