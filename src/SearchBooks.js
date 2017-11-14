import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  constructor(props){
      super(props)
      this.state = {
          query: '',
          books: []
      }
  }

  updateQuery = value => {
    this.setState({ query: value.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  handleInputChange = (value) => {
        this.updateQuery(value)
        BooksAPI.search(this.state.query, 20).then(books => {
          if (!books || books.hasOwnProperty('error')){
              this.setState({ books: []})
          } else {
              books =  this.props.onShelf(this.props.books, books)
              this.setState({ books })
          }
        })
  }

  render() {
    const { query, books} = this.state
    const { onChageShelf} = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">

            <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.handleInputChange(event.target.value)}/>
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

export default SearchBooks
