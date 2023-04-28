import { gql } from '@apollo/client'

const QUERIES = {
  products: {
    getAll: gql`
      query {
        allProducts {
          ... on ProductSimple {
            __typename
            name
            seller
            image
            price
            stock
          }
          ... on ProductRentable {
            __typename
            name
            seller
            image
            price
            rentedDate {
              from
              to
            }
          }
          ... on ProductPlace {
            __typename
            name
            seller
            image
            price
            rentedDate {
              from
              to
            }
          }
        }
      }
    `,
    find: gql`
      query findProductbyName($name: String!) {
        findProduct(name: $name) {
          ... on ProductSimple {
            __typename
            name
            seller
            image
            price
            stock
          }
          ... on ProductRentable {
            __typename
            name
            seller
            image
            price
            rentType
            rentedDate {
              from
              to
            }
          }
          ... on ProductPlace {
            __typename
            name
            seller
            image
            price
            location
            rentedDate {
              from
              to
            }
          }
        }
      }

    `
  }
}

export default QUERIES
