import React from 'react'
import './Grid.scss'

/**
 * Componente genérico, usado para criar um tag 
 * 
 * @param {*} props 
 */
const Tag = props => {
  const tag = props.as ? props.as : 'div'
  return React.createElement(tag, props, props.children)
}

const Row = props => {
  return (
    <Tag {...props} className={`${props.className ? props.className : ''} row`}>
      {props.children}
    </Tag>
  )
}

const Column = props => {
  return (
    <Tag {...props} className={`${props.className ? props.className : ''} col`}>
      {props.children}
    </Tag>
  )
}

export { Row, Column }
