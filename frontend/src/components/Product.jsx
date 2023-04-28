import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Button from './Button'
import Icon from './Icon'

const Product = ({ product }) => {
  const navigate = useNavigate()
  const { __typename: type, name, seller, image, price, ...extra } = product

  let isAvailable = false

  if (type === 'ProductSimple') {
    isAvailable = extra.stock > 0
  } else if (type === 'ProductRentable' || type === 'ProductPlace') {
    const from = new Date(extra.rentedDate.from).getTime()
    const to = new Date(extra.rentedDate.to).getTime()
    const now = new Date().getTime()

    isAvailable = !(now > from && now < to)
  }

  return (
    <div className='product-component'>
      <div className='product-overlay'>
        <Button
          variant='secondary'
          onClick={() => navigate(`/product/${name.trim()}`)}
        >
          {type === 'ProductSimple' ? 'Comprar' : 'Rentar'}
        </Button>
      </div>
      <div
        className={classNames(
          'product-availability',
          isAvailable ? 'available' : 'not-available'
        )}
      >
        <Icon name={isAvailable ? 'check' : 'exclamation-circle'}></Icon>
        <small>{isAvailable ? 'Disponible' : 'No disponible'}</small>
      </div>
      <img src={image} alt='product_image' />
      <div className='product-summary'>
        <div className='product-data'>
          <h2>{name}</h2>
          <p>{seller}</p>
        </div>
        <div className='product-price'>
          <small>USD</small>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
