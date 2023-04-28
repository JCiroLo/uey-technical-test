import React from 'react'
import classNames from 'classnames'

const Icon = ({ name, type = 'far', fixed = true, spin = false }) => {
  return (
    <i
      className={classNames('icon', type, `fa-${name}`, {
        'fa-fw': fixed,
        'fa-spin': spin
      })}
    ></i>
  )
}

export default Icon
