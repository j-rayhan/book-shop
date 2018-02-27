"use strict"

//Cart reducers
export function cartReducers(state ={cart:[]}, action){
  switch (action.type) {
    case "ADD_TO_CART":
    return {...state, 
    	cart:action.payload,
    	totalQty: grantTotal(action.payload).qty,
    	grantTotal: grantTotal(action.payload).amount
    	};
    break;

    case "DELETE_CART_ITEM":
    return {...state, cart:action.payload,
    		totalQty: grantTotal(action.payload).qty,
    		grantTotal: grantTotal(action.payload).amount };
    break;

    case "UPDATE_CART_ITEM":
     const currentBooksToUpdate = [...state.cart];
     //DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE DELETED
     const indexToUpdate = currentBooksToUpdate.findIndex(
            function(book){
                return book._id === action._id;
            }
        )
     // CREATE A NEW BOOK BOJECT WITH THE NEW VALUES AND WITH THE SAME ARRAY INDEX OF THE ITEM WE WANT TO
     // REPLACE. TO ACHIEVE THIS WE WILL USE ...SPREAD BUT WE COULD USE CONCAT METHOS TO
     const newBookToUpdate = {
        ...currentBooksToUpdate[indexToUpdate],
        quantity: currentBooksToUpdate[indexToUpdate].quantity + action.unit
     }
     let cartUpdate = [...currentBooksToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBooksToUpdate.slice(indexToUpdate + 1)];
    return {...state, cart:cartUpdate,
    		totalQty: grantTotal(cartUpdate).qty,
    		grantTotal: grantTotal(cartUpdate).amount
    };
    break;
    
    
  }
  return state
}


//CALCULATE TOTALS
export function grantTotal(payloadArr) {
	const grantTotal = payloadArr.map(function(cartArr) {
		return (cartArr.price * cartArr.quantity);
	}).reduce(function(a,b){
		return a+b;
	},0)// START SUMMINT FROM INDEX[0]

	const totalQty = payloadArr.map(function(qty) {
		// 
		return qty.quantity;
	}).reduce(function(a,b){
		return a+b;
	})

	return	{amount: grantTotal.toFixed(2), qty: totalQty}
}