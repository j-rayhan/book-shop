"use strict"
for (let i = 0; i < 3; i++) {
  //console.log(i);
       var a =    [ {
                       id:i,
                       title: "this is the second book title",
                       description: 'this is the book discription',
                       price: 38
                   }]
            a.concat(a)
           // console.log(a);
}
const booksList=[
            {
                _id:1,
                title: 'this is the book title',
                description: 'this is the book discription',
                price: 33.33
            },{
                _id:2,
                title: 'this is the second book title',
                description: 'this is the second book discription',
                price: 38
            },{
                _id:3,
                title: 'this is the book title',
                description: 'this is the book discription',
                price: 33.33
            },{
                _id:4,
                title: 'this is the second book title',
                description: 'this is the second book discription',
                price: 38
            }
            ]

//Book reducers
//STEP 3 define reducers
export const booksReducers = function(state={books:booksList}, action){
     switch(action.type){
        case "GET_BOOKS":;
         return {...state, books: [...state.books]};
         break;
         case "POST_BOOK":
         // let books = state.books.concat(action.payload);
         //  return {books};
         return {books: [...state.books, ...action.payload]};
         break;
         
         case "DELETE_BOOK":
        //CREATE A COPY OF THE CURRENT ARRAY OF BOOKS
         const currentBooks = [...state.books];
         //DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE DELETED
         const indexToDelete = currentBooks.findIndex(
                function(book){
                    return book.id === action.payload.id;
                }
            )
         // USE SLICE TO REMOVE THE BOOK AT THE SPECIFIED INDEX
         return {books: [...currentBooks.slice(0, indexToDelete), ...currentBooks.slice(indexToDelete + 1)]};
         break;

         case "UPDATE_BOOK":
         //CREATE A COPY OF THE CURRENT ARRAY OF BOOKS
         const currentBooksToUpdate = [...state.books];
         //DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE DELETED
         const indexToUpdate = currentBooksToUpdate.findIndex(
                function(book){
                    return book.id === action.payload.id;
                }
            )
         // CREATE A NEW BOOK BOJECT WITH THE NEW VALUES AND WITH THE SAME ARRAY INDEX OF THE ITEM WE WANT TO
         // REPLACE. TO ACHIEVE THIS WE WILL USE ...SPREAD BUT WE COULD USE CONCAT METHOS TO
         const newBookToUpdate = {
            ...currentBooksToUpdate[indexToUpdate],
            title: action.payload.title
         }
         console.log('what is it newBookToUpdate ', newBookToUpdate);
         // USE SLICE TO REMOVE THE BOOK AT THE SPECIFIED INDEX, REPLACE WITH THE NEW OBJECT ANC CONCATE WITH 
         // THE REST OF ITEMS IN THE ARRAY
         return {books: [...currentBooksToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBooksToUpdate.slice(indexToUpdate + 1)]};
         break;
         }
     return state
}