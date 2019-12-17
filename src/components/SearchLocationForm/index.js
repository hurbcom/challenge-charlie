import React from 'react'
import { Column } from '../Grid'

const SearchLocationForm = props => {
  return (
    <Column class="slf-wrapper">
      <Icon />
      <InputField />
    </Column>
  )
}

const Icon = props => {
  return (
    <span class="icon"></span>
  )
}

const InputField = props => {
  return (
    <input type="text" />
  )
}

export default SearchLocationForm