import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

class SearchBooks extends Component {
  /*static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }*/

  state = {
    query: '',
    books: []
  }

  updateQuery = (value) => {
    this.setState({ query: value.trim() })
    if(this.state.query === '') {
            this.setState({query: []})
        } else {
            BooksAPI.search(this.state.query, 20).then((books) => {
              this.setState({ books })
                //if (Array.isArray(query)) {
                    //this.checkForBooksInShelves(query)
                //}
            })
            console.log("bookssearch "+ this.state.books)
        }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { query, books} = this.state
    const {onChageShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid"></ol>
          <Shelf
            books={books}
            title='Search result'
            onChageShelf={onChageShelf}
          />
        </div>
      </div>
    )
  }
}
/*ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}*/

export default SearchBooks
