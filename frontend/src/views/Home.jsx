import React from 'react'
import { useQuery } from '@apollo/client'

import Product from '../components/Product'
import Container from '../components/Container'

import QUERIES from '../queries'

const Home = () => {
  const { data, loading, error } = useQuery(QUERIES.products.getAll)

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  const products = data.allProducts

  return (
    <Container>
      <div className='home-view'>
        {products.map((product, index) => (
          <Product product={product} key={index}></Product>
        ))}
      </div>
    </Container>
  )
}

export default Home
