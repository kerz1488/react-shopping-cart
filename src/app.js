'use strict';
import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import reducers from './reducers/index'
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// step 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
  <Provider store={store}>
  <BooksList/>
</Provider>, document.getElementById('app'))
