"use strict"

// ADD CART  BOOK
export function	addToCart(book){
	return {
		type: "ADD_TO_CART",
		payload: book
	}
}

// UPDATE CART ITEM
export function	updateCartItem(_id,unit, cart){
	const currentBooksToUpdate = cart;
	//DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE DELETED
	const indexToUpdate = currentBooksToUpdate.findIndex(
				 function(book){
						 return book._id === _id;
				 }
		 )
	// CREATE A NEW BOOK BOJECT WITH THE NEW VALUES AND WITH THE SAME ARRAY INDEX OF THE ITEM WE WANT TO
	// REPLACE. TO ACHIEVE THIS WE WILL USE ...SPREAD BUT WE COULD USE CONCAT METHOS TO
	const newBookToUpdate = {
		 ...currentBooksToUpdate[indexToUpdate],
		 quantity: currentBooksToUpdate[indexToUpdate].quantity + unit
	}
	let cartUpdate = [...currentBooksToUpdate.slice(0, indexToUpdate),
		newBookToUpdate, ...currentBooksToUpdate.slice(indexToUpdate + 1)];

	return {
		type: "UPDATE_CART_ITEM",
		payload: cartUpdate
	}
}

// DELETE FROM CART
export function	deleteCartItem(cart){
	return {
		type: "DELETE_CART_ITEM",
		payload: cart
	}
}
