"use strict"

// ADD CART  BOOK
export function	addToCart(book){
	return {
		type: "ADD_TO_CART",
		payload: book
	}
}

// DELETE FROM CART
export function	deleteCartItem(cart){
	return {
		type: "DELETE_CART_ITEM",
		payload: cart
	}
}