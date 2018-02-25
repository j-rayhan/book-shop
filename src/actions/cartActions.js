"use strict"

// ADD CART  BOOK
export function	addToCart(book){
	return {
		type: "ADD_TO_CART",
		payload: book
	}
}