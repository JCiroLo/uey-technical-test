import React from 'react'
import classNames from 'classnames'

const Button = ({ variant = 'primary', children, className, onClick }) => {
  return (
    <button
      className={classNames('button-component', className, variant)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
