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

  /*onShelf = (books, bookSearch) => {
    for(var i=0; i<bookSearch.length;i++){
      for(var j=0; i<books.length;i++){
        books[j].id === bookSearch[i].id ? bookSearch[i].shelf = books[j].shelf : bookSearch[i].shelf = 'none'
      }
    }
    return bookSearch;
  }*/
  onShelf = (books, bookSearch) => {
  return bookSearch.map(book => {
      const matchBook = books.find(b => b.id === book.id)
      if (matchBook) {
        book.shelf = matchBook.shelf
      } else {
        book.shelf = 'none'
      }
      return book
  })
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
            onShelf={this.onShelf}
            onChageShelf={this.updateBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
