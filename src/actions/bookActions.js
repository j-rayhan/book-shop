"use strict"
import axios from 'axios';
// 	Get a BOOK
export function	getBooks(){
	return function(dispatch){
		axios.get("/api/books")
			.then(function(response){
				dispatch({type:"GET_BOOKS", payload: response.data})
			})
			.catch(function(err){
				dispatch({type:"GET_BOOK_REJECTED", payload:err})
			})
	}
}

// POST a BOOK
export function	postBooks(book){
	return function(dispatch){
		axios.post("/api/books", book)
			.then(function(response){
				dispatch({type:"POST_BOOK", payload: response.data})
			})
			.catch(function(err){
				dispatch({type:"POST_BOOK_REJECTED", payload: "THERE WAS AN ERROR WHILE POSTING A NEW BOOK"})
			})
	}
}
// DELETE a BOOK
export function	deleteBook(id){
	return function(dispatch){
		axios.delete("/api/books/"+id)
			.then(function(response){
				dispatch({type:"DELETE_BOOK", payload: id})
			})
			.catch(function(err){
				dispatch({type:"DELETE_BOOK_REJECTED", payload: err})
			})
	}
}

// UPDATE BOOK
export function	updateBook(book){
	return {
		type: "UPDATE_BOOK",
		payload: book
	}
}

// RESET BOOK FORM
export function	resetBookForm(){
	return {
		type: "RESET_FORM"
	}
}
