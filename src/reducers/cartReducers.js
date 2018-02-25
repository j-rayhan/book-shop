"use strict"

//Cart reducers
export function cartReducers(state ={cart:[]}, action){
  switch (action.type) {
    case "ADD_TO_CART":
    return {cart:[...state.cart, ...action.payload] };
    break;
    
  }
  return state
}
