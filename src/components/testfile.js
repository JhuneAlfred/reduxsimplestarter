const intersectionBy = require('lodash')

const books = [
  {
    title: 'photography',
    code: '123'
  },
  {
    title: 'gardening',
    code: '333'
  },
  {
    title: 'stock market',
    code: '222'
  }
]
const prices = [
  {
    code: '123',
    price: '12.50'
  },
  {
    code: '222',
    price: '43.00'
  }
]

const textBooks = intersectionBy(prices, books, 'code')

//console.log(prices)
console.log(textBooks)
