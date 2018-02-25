"use strict"
import {createStore} from 'redux';

//STEP 3 define reducers
const reducer = function(state=[], action){
	 switch(action.type){
		 case "POST_BOOK":
		 let books = state.concat(action.payload);
		  return books;
		 break;
		 }
	 return state
}

// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(function(){
 console.log('current state is: ',store.getState());
 console.log('current price: ',store.getState().price);
})

// STEP 2 create and dispatch actions
store.dispatch({
	 type:"POST_BOOK",
	 payload: [{
	 	 	id: 1,
	 	 	title:'this is the book title',
	 	 	description: 'this is the book description',
	 	 	price: 33.33
	 	 },{
	 	 	id: 2,
	 	 	title:'this is the Second book title',
	 	 	description: 'this is the book description',
	 	 	price: 36
	 	 }]
})


// DISPATCH an other book
store.dispatch({
 type:"POST_BOOK",
 payload: {
 id: 3,
 title:'this is the third book title',
 description: 'this is the third book description',
 price: 40
 }
})