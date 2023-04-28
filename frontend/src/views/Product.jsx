import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Container from '../components/Container'
import Button from '../components/Button'
import Modal from '../components/Modal'

import QUERIES from '../queries'

function Product () {
  const [showModal, setShowModal] = useState(false)
  const params = useParams()
  const { data, loading, error } = useQuery(QUERIES.products.find, {
    variables: {
      name: params.name
    }
  })

  if (loading) {
    return <div>loading</div>
  }

  if (error || !data?.findProduct) {
    return <div>Error</div>
  }

  const {
    __typename: type,
    name,
    seller,
    image,
    price,
    ...extra
  } = data.findProduct

  let isAvailable = false

  if (type === 'ProductSimple') {
    isAvailable = extra.stock > 0
  } else if (type === 'ProductRentable' || type === 'ProductPlace') {
    const from = new Date(extra.rentedDate.from).getTime()
    const to = new Date(extra.rentedDate.to).getTime()
    const now = new Date().getTime()

    isAvailable = !(now > from && now < to)
  }

  const handleToggleModal = () => {
    if (type === 'ProductSimple') {
      setShowModal(prevState => !prevState)
    }
  }

  return (
    <Container>
      <div className='product-view'>
        <h2>{showModal}</h2>
        <div className='product-image'>
          <img src={image} alt='product_image' />
        </div>
        <div className='product-summary'>
          <h1>{name}</h1>
          <p>{seller}</p>
          <section>
            <h2>Acerca del producto</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              vero porro fugit enim placeat corporis, dolorem mollitia,
              exercitationem molestiae dolorum quaerat. Ipsa ab necessitatibus
              asperiores error aperiam consequuntur ut totam.
            </p>
          </section>
          {type === 'ProductRentable' && (
            <section>
              <h2>Tipo de renta</h2>
              <p>{extra.rentType === 'PER_NIGHT' ? 'Por noche' : 'Por hora'}</p>
            </section>
          )}
          {type === 'ProductPlace' && (
            <section>
              <h2>Ubicación del espacio</h2>
              <iframe title='location_map' src={extra.location}></iframe>
            </section>
          )}
        </div>
        <div className='product-actions'>
          <div className='product-price'>
            <small>USD</small>
            <p>{price}</p>
          </div>
          <div className='buy-product'>
            <Button disabled={!isAvailable} onClick={handleToggleModal}>
              {type === 'ProductSimple' ? 'Comprar' : 'Rentar'}
            </Button>
          </div>
          <div className='product-availability'>
            {type === 'ProductSimple' ? (
              <section className={isAvailable ? 'available' : 'not-available'}>
                <h2>Disponibles</h2>
                <p>{extra.stock}</p>
              </section>
            ) : (
              <section className={isAvailable ? 'available' : 'not-available'}>
                <h2>{isAvailable ? 'Disponible' : 'No disponible'}</h2>
              </section>
            )}
          </div>
        </div>
        <Modal
          show={showModal}
          title={
            type === 'ProductSimple' ? 'Comprar producto' : 'Rentar producto'
          }
          onClose={handleToggleModal}
        >
          <form>
            <label>Ingresa tu dirección</label>
            <input type='text' />
          </form>
        </Modal>
      </div>
    </Container>
  )
}

export default Product
