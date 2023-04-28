export default [
  {
    __typename: 'ProductPlace',
    name: 'Coffee Room',
    seller: 'Joe Doe',
    image:
      'https://images.pexels.com/photos/2317542/pexels-photo-2317542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 499.99,
    location:
      'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=6.249268110173472,%20-75.5913317849636+(Coffe%20Room)&t=&z=17&ie=UTF8&iwloc=B&output=embed',
    rentedDate: {
      from: new Date('April 25, 2023 15:00:00').toISOString(),
      to: new Date('April 24, 2023 15:00:00').toISOString()
    }
  }
]
