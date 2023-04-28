export default [
  {
    __typename: 'ProductRentable',
    name: 'Men Suit',
    seller: 'Joe Doe',
    image:
      'https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 199.99,
    rentType: 'PER_NIGHT',
    rentedDate: {
      from: new Date('April 27, 2023 15:00:00').toISOString(),
      to: new Date('April 28, 2023 15:00:00').toISOString()
    }
  }
]
