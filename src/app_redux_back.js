'use strict';

import {createStore} from 'redux';

// step 3 define reducers const reducer = (state = 0, action) => {   switch
// (action.type) {     case 'INCREMENT':       return state + action.payload;
// break;     case 'DECREMENT':       return state - action.payload break;
// default:       return state;   } };
const reducer = (state = {
  books: []
}, action) => {
  switch (action.type) {
    case 'POST_BOOK':
      // return state =  action.payload; Concat action for more array and not destroy
      // the new payload let books = state.books.concat(action.payload); return
      // {books}
      return {
        books: [
          ...state.books,
          ...action.payload
        ]
      }
      break;
    case 'DELETE_BOOK':
      // create a copy of the current arrayof books
      const currentBookToDelete = [...state.books]
      // Determine at with index in books array is the book to deleted
      const indexToDelete = currentBookToDelete.findIndex(function (book) {
        return book.id === action.payload.id;
      })
      // use slice to remove the book at the specified index
      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1)
        ]
      }
    case 'UPDATE_BOOK':
      // create a copy of the current arrayof books
      const currentBookToUpdate = [...state.books]
      // Determine at with index in books array is the book to deleted
      const indexToUpdate = currentBookToUpdate.findIndex(function (book) {
        return book.id === action.payload.id;
      })
      // create a new book object with the new values and with the same array index of
      // the item we want to replace. to achieve this we will use ...spread but we
      // could use conact methos too
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }
      // this log has the purpose to show you how newBookToUpdate looks like
      console.log('what is it newBookToUpdate', newBookToUpdate);
      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)
        ]
      }
    default:
      return state;
  }
};

// step 1 create the store
const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state is:', store.getState());
  // console.log('current price is:', store.getState()[1].price);
})

// step 2 create and dispatch actions store.dispatch(   {     type: 'INCREMENT',
//     payload: 1   }, ) store.dispatch(   {     type: 'INCREMENT', payload: 1
// }, ) store.dispatch(   {     type: 'DECREMENT',     payload: 1 }, )

store.dispatch({
  type: 'POST_BOOK',
  payload: [
    {
      id: 1,
      title: 'this is the book title',
      description: 'this is the book description',
      price: 33.33
    }, {
      id: 2,
      title: 'this is the second book title',
      description: 'this is the second book description',
      price: 69.55
    }
  ]
})

// dispatch the second book
store.dispatch({
  type: 'POST_BOOK',
  payload: [
    {
      id: 3,
      title: 'this is the third book title',
      description: 'this is the trird book description',
      price: 66.666
    }
  ]
})

// Delete Book
store.dispatch({
  type: 'DELETE_BOOK',
  payload: {
    id: 1
  }
})

// Update to BOOks
store.dispatch({
  type: 'UPDATE_BOOK',
  payload: {
    id: 2,
    title: 'Update the books'
  }
})
