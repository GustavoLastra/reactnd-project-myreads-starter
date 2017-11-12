import React from 'react'
import { Route } from 'react-router-dom' //imported the React Router
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

//Here is the function to update the books with their shelfs
  updateBook=(shelf, book)=>{
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
          books={this.state.books}
          onChageShelf= {(shelf, book) => {
            this.updateBook(shelf, book)
          }}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            onSearchListBooks={() => {
              history.push('/')
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
