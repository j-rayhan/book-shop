"use strict"

// ADD CART  BOOK
export function	addToCart(book){
	return {
		type: "ADD_TO_CART",
		payload: book
	}
}

// UPDATE CART ITEM
export function	updateCartItem(_id,unit){
	return {
		type: "UPDATE_CART_ITEM",
		_id: _id,
		unit: unit
	}
}

// DELETE FROM CART
export function	deleteCartItem(cart){
	return {
		type: "DELETE_CART_ITEM",
		payload: cart
	}
}