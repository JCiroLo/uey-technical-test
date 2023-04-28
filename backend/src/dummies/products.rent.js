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
  },
  {
    __typename: 'ProductRentable',
    name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
    seller: 'Adams Dopey',
    price: 64,
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rentType: 'PER_HOUR',
    rentedDate: {
      from: new Date('April 25, 2023 15:00:00').toISOString(),
      to: new Date('April 24, 2023 15:00:00').toISOString()
    }
  },
  {
    __typename: 'ProductRentable',
    name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    seller: 'Clark Nala',
    price: 599,
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    rentType: 'PER_NIGHT',
    rentedDate: {
      from: new Date('April 25, 2023 15:00:00').toISOString(),
      to: new Date('April 24, 2023 15:00:00').toISOString()
    }
  },
  {
    __typename: 'ProductRentable',
    name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor. Super Ultrawide Screen QLED',
    seller: 'Clark Nala',
    price: 999.99,
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    rentType: 'PER_HOUR',
    rentedDate: {
      from: new Date('April 25, 2023 15:00:00').toISOString(),
      to: new Date('April 24, 2023 15:00:00').toISOString()
    }
  }
]
