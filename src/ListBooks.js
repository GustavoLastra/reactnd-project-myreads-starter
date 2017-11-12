import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  //Here is the funtion that calls the parents function
  onBookUpdate = (shelf, book) => {
    this.props.onChageShelf(shelf, book)
  }

  render() {
    const { books, onDeleteContact } = this.props
    for(var i=0;i<books.length;i++){
      if(books[i].shelf==='currentlyReading') {
        this.state.currentlyReading.push(books[i]);
      }else if (books[i].shelf==='read') {
        this.state.read.push(books[i]);
      }else if (books[i].shelf==='wantToRead') {
        this.state.wantToRead.push(books[i]);
      }
    }
    return(
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>

        <Shelf
          books={this.state.currentlyReading}
          title='Currently reading'
          onChageShelf={(shelf, book) => {
            this.onBookUpdate(shelf, book)
          }}
        />
        <Shelf
          books={this.state.wantToRead}
          title='Want to read'
          onChageShelf={(shelf, book) => {
            this.onBookUpdate(shelf, book)
          }}        />
        <Shelf
          books={this.state.read}
          title='Read'
          onChageShelf={(shelf, book) => {
            this.onBookUpdate(shelf, book)
          }}
        />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>)
  }
}
export default ListBooks
