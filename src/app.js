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
import Menu from './components/pages/menu';
import Footer from './components/pages/footer';
render(
	<Provider store={store}>
		<div>
			<Menu />
			<BooksList />
			<Footer />
		</div>
	</Provider>, document.getElementById('app')
	);

//  //-------------- CART ACTION ----------------

// //ADD TO CART  
// store.dispatch(addToCart([{id:2}]))