import React from 'react'
import { Route } from 'react-router-dom' //imported the React Router
import SearchBooks from './SearchBooks'
import ListShelf from './ListShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          books: []
      }

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    })
    console.log("books: " + this.state.books)
  }

//Here is the function to update the books with their shelfs
  updateBook = (newShelf, book) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }

  isBookOnShelf = (books, searchResults) => {
      searchResults.forEach((searchResult) => {
          books.forEach((book) => {
              book.id === searchResult.id ? searchResult.shelf = book.shelf : searchResult.shelf = 'none'
          })
      })
      return searchResults;
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListShelf
          books={this.state.books}
          onChageShelf={this.updateBook}/>
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            onSearchListBooks={() => {
              history.push('/')
            }}
            books={this.state.books}
            isBookOnShelf={this.isBookOnShelf}
            onChageShelf={this.updateBook}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
