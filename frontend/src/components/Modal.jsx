import React from 'react'
import classNames from 'classnames'
import Button from './Button'

const Modal = ({ show, title, onClose, children }) => {
  return (
    <div className={classNames('modal-component', { show })}>
      <div className='modal-content'>
        <div className='modal-header'>
          <p>{title}</p>
        </div>
        <div className='modal-body'>{children}</div>
        <div className='modal-footer'>
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
