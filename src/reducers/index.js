"use strict"
import {combineReducers} from 'redux';

//Here import reducers to be combined
import {booksReducers} from './booksReducers';


//Here combine the reducers

export default combineReducers({
	books: booksReducers
})