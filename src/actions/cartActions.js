'use strict'

// ADD TO Cart
export function addToCart(book) {
  return {type: 'ADD_TO_CART', payload: book}
}
