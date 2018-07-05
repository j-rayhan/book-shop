"use strict"
import {combineReducers} from 'redux';

//Here import reducers to be combined
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';


//Here combine the reducers

export default combineReducers({
	books: booksReducers,
	cart: cartReducers
})