"use strict"
import axios from 'axios';

// GET CART
export function	getCart(cart){
	return function(dispatch){
		axios.get('/api/cart', cart)
		.then(function(response){
			dispatch({type: 'GET_CART', payload: response.data})
		})
		.catch(function(err){
			dispatch({type: 'GET_CART_REJECTED', msg: 'error when getting to the cart from session'})

		})
	}
}

// ADD CART  BOOK
export function	addToCart(cart){
	return function(dispatch){
		axios.post('/api/cart', cart)
		.then(function(response){
			dispatch({type: 'ADD_TO_CART', payload: response.data})
		})
		.catch(function(err){
			dispatch({type: 'ADD_TO_CART_REJECTED', msg: 'error when adding to the cart'})

		})
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

	return function(dispatch){
		axios.post('/api/cart', cartUpdate)
		.then(function(response){
			dispatch({type: 'UPDATE_CART_ITEM', payload: response.data})
		})
		.catch(function(err){
			dispatch({type: 'UPDATE_CART_ITEM_REJECTED', msg: 'error when adding to the cart'})

		})
	}
}

// DELETE FROM CART
export function	deleteCartItem(cart){
	return function(dispatch){
		axios.post('/api/cart', cart)
		.then(function(response){
			dispatch({type: 'DELETE_CART_ITEM', payload: response.data})
		})
		.catch(function(err){
			dispatch({type: 'DELETE_CART_ITEM_REJECTED', msg: 'error when deleteing an item from the cart'+ err})

		})
	}
	// return {
	// 	type: "DELETE_CART_ITEM",
	// 	payload: cart
	// }
}
