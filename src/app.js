"use strict"
import {createStore} from 'redux';
//IMPROT COMBINE REDUCERS
import reducers from './reducers';


//IMPROT ACTIONS
import {postBooks, deleteBook, updateBook} from './actions/bookActions';
import {addToCart} from './actions/cartActions';

// STEP 1 create the store
const store = createStore(reducers);
store.subscribe(function(){
 console.log('current state is: ',store.getState());
 // console.log('current price: ',store.getState().price);
})

// STEP 2 create and dispatch actions
store.dispatch(postBooks(
		[{
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
))



//delete action  
 store.dispatch(deleteBook({id:1}))
 
 //update action  
 store.dispatch(updateBook(
 	{id:2,title: 'New update title'}
 ))

 //-------------- CART ACTION ----------------

//ADD TO CART  
store.dispatch(addToCart([{id:2}]))