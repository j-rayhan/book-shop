"use strict"
//REACT
import React from 'react';
import {render} from 'react-dom';
import {Router,Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {applyMiddleware ,createStore} from 'redux';
//IMPROT COMBINE REDUCERS
import reducers from './reducers';


//IMPROT ACTIONS
import {postBooks, deleteBook, updateBook} from './actions/bookActions';
import {addToCart} from './actions/cartActions';


const middleware = applyMiddleware(thunk, logger());
// WE WILL PASS INITIAL STATE FROM SERVER STORE
const initialState = window._APP_INITIAL_STATE_;
const store = createStore(reducers, initialState, middleware);
// IMPORT ROUTES
import routes from './routes';

const Routes=(
			<Provider store={store}>
				{routes}
			</Provider>
	)

render(
	Routes, document.getElementById('app')
	);
