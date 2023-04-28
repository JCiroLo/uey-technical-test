import { ApolloServer, gql } from 'apollo-server'

import ProductsSimple from './dummies/products.simple.js'
import ProductsRent from './dummies/products.rent.js'
import ProductsRoom from './dummies/products.room.js'

const PRODUCTS = [...ProductsSimple, ...ProductsRent, ...ProductsRoom]

const typeDefs = gql`
  enum RentType {
    PER_NIGHT
    PER_HOUR
  }

  union Product = ProductSimple | ProductRentable | ProductPlace

  type RentedDate {
    from: String
    to: String
  }

  type ProductSimple {
    name: String!
    seller: String!
    image: String!
    price: Float!
    stock: Int!
  }

  type ProductRentable {
    name: String!
    seller: String!
    image: String!
    price: Float!
    rentType: RentType!
    rentedDate: RentedDate!
  }

  type ProductPlace {
    name: String!
    seller: String!
    image: String!
    price: Float!
    location: String!
    rentedDate: RentedDate!
  }

  type Query {
    allProducts: [Product]!
    findProduct(name: String!): Product
  }
`

const resolvers = {
  Query: {
    allProducts: () => PRODUCTS,
    findProduct: (root, { name }) =>
      PRODUCTS.find(product => product.name === name)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Running server on: ${url}`)
})
