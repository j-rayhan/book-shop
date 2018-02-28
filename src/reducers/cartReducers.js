"use strict"

//Cart reducers
export function cartReducers(state ={cart:[]}, action){
  switch (action.type) {
    case "GET_CART":
    return {...state,
    	cart:action.payload,
    	totalQty: grantTotal(action.payload).qty,
    	grantTotal: grantTotal(action.payload).amount
    	};
    break;
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
     return {...state, cart:action.payload,
    		totalQty: grantTotal(action.payload).qty,
    		grantTotal: grantTotal(action.payload).amount
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
