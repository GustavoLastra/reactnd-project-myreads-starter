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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
          books={this.state.books}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            books={this.state.books}
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
