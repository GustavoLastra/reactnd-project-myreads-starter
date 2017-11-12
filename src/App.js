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
      this.setState({ books: books });
    })
  }

//Here is the function to update the books with their shelfs
  updateBook=(shelf, book)=>{
    console.log("book: " + book.title + " shelf: " + shelf)
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState({ books: this.replace(book)});
    /*var tempBooks = this.state.books;
    console.log("temp before: " + tempBooks);
    for(var i=0; i <= this.state.books.length; i++) {
      if(book.id === this.state.books[i].id){
        console.log("found book with same id");
        tempBooks[i].shelf=book.shelf;
        console.log("temp after: " +  tempBooks);
        this.setState({ books: tempBooks })
      }
    }*/
  }
  replace = (book) => {
      let books = this.state.books.map((bookTemp) => {
          if (bookTemp.id === book.id) {
              return book
          } else {
              return bookTemp
          }
      })
      return books
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
          books={this.state.books}
          onChageShelf={(shelf, book) => {
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
