"use strict"
//REACT
import React from 'react';

import {render} from 'react-dom';

import {Provider} from 'react-redux';

import {applyMiddleware ,createStore} from 'redux';
import logger from 'redux-logger';
//IMPROT COMBINE REDUCERS
import reducers from './reducers';


//IMPROT ACTIONS
import {postBooks, deleteBook, updateBook} from './actions/bookActions';
import {addToCart} from './actions/cartActions';


const middleware = applyMiddleware(logger());
// STEP 1 create the store
const store = createStore(reducers, middleware);

// IMPORT PAGES
import BooksList from './components/pages/booksList';

render(
	<Provider store={store}>
		<BooksList />
	</Provider>, document.getElementById('app')
	);
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



// //delete action  
//  store.dispatch(deleteBook({id:1}))
 
//  //update action  
//  store.dispatch(updateBook(
//  	{id:2,title: 'New update title'}
//  ))

//  //-------------- CART ACTION ----------------

// //ADD TO CART  
// store.dispatch(addToCart([{id:2}]))