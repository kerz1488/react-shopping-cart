import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getBooks} from '../../actions/booksActions'
import {bindActionCreators} from 'redux'
import {Grid, Col, Row, Button} from 'react-bootstrap'

import BookItem from './booksItem'
import BookForm from './booksForm'
class BooksList extends Component {

  componentDidMount() {
    // dispatch an action
    this
      .props
      .getBooks()
  }

  render() {
    const booksList = this
      .props
      .books
      .map(function (booksArr) {
        return (
          <Col xs={12} sm={6} md={4} key={booksArr.id}>
            <BookItem
              id={booksArr.id}
              title={booksArr.title}
              description={booksArr.description}
              price={booksArr.price}/>
          </Col>
        )
      })
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <BookForm/>
          </Col>
          {booksList}
        </Row>
      </Grid>
    )
  }
}
function mapStateToProps(state) {
  return {books: state.books.books}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
