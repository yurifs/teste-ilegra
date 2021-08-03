/* eslint-disable import/prefer-default-export */
export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product,
  };
}
