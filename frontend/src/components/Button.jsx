import React from 'react'
import classNames from 'classnames'

const Button = ({
  variant = 'primary',
  disabled = false,
  children,
  className,
  onClick
}) => {
  return (
    <button
      className={classNames('button-component', className, variant)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
