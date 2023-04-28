import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { client } from './lib/ApolloClient'
import { ApolloProvider } from '@apollo/client'

import Home from './views/Home'
import Product from './views/Product'

import './assets/css/_default.scss'

import './assets/css/views/home.scss'
import './assets/css/views/product.scss'

import './assets/css/components/product.scss'
import './assets/css/components/button.scss'
import './assets/css/components/container.scss'
import './assets/css/components/modal.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/product/:name',
    element: <Product></Product>
  }
])

function App () {
  return (
    <ApolloProvider client={client}>
      <div className='shop'>
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  )
}

export default App
