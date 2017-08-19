'use strict'

// BOOKS REDUCERS
let initialState = {
  books:
  [{
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is the second book title',
    description: 'this is second the book description',
    price: 66.33
  }]
}

export function booksReducers(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {...state, books:[...state.books]}
      break;
    case 'POST_BOOK':
      // return state =  action.payload;
      // Concat action for more array and not destroy the new payload
      // let books = state.books.concat(action.payload);
      // return {books}
      return {books:[...state.books, ...action.payload]}
      break;
    case 'DELETE_BOOK':
      // create a copy of the current arrayof books
      const currentBookToDelete = [...state.books]
      // Determine at with index in books array is the book to deleted
      const indexToDelete = currentBookToDelete.findIndex(
        function(book){
          return book.id === action.payload.id;
        }
      )
      // use slice to remove the book at the specified index
      return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
      case 'UPDATE_BOOK':
        // create a copy of the current arrayof books
        const currentBookToUpdate = [...state.books]
        // Determine at with index in books array is the book to deleted
        const indexToUpdate = currentBookToUpdate.findIndex(
          function(book){
            return book.id === action.payload.id;
          }
        )
        // create a new book object with the new values and with the same array index of the item we want
        // to replace. to achieve this we will use ...spread but we could use conact methos too
        const newBookToUpdate = {
          ...currentBookToUpdate[indexToUpdate],
          title: action.payload.title
        }
        // this log has the purpose to show you how newBookToUpdate looks like
        console.log('what is it newBookToUpdate', newBookToUpdate);
        return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    default:
      return state;
  }
};
