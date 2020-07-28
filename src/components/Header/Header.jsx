import React from 'react'
import PropTypes from 'prop-types'
import Input from 'components/Input/Input'
import Compass from 'icons/compass.svg'
import useInput from 'hooks/useInput'
import styles from './Header.module.scss'

const Header = ({ city, state }) => {
  const { text, setText } = useInput()

  const placeholder = city && state ? `${city}, ${state}` : ''

  return (
    <header className={styles.header}>
      <label htmlFor='locale-input'>
        <Compass />
      </label>

      <Input onChange={setText} placeholder={placeholder} text={text} />
    </header>
  )
}

Header.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
}

export default Header
