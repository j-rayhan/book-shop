"use strict"

//Cart reducers
export function cartReducers(state ={cart:[]}, action){
  switch (action.type) {
    case "ADD_TO_CART":
    return {cart:[...state, ...action.payload] };
    break;

    case "DELETE_CART_ITEM":
    return {cart:[...state, ...action.payload] };
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
    return {...state, cart:cartUpdate};
    break;
    
    
  }
  return state
}
