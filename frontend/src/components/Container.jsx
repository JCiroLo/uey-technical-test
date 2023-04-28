import React from 'react'
import classNames from 'classnames'

const Container = ({ children, className }) => {
  return (
    <div className={classNames('container-component', className)}>
      {children}
    </div>
  )
}

export default Container
