import React from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

function ListBooks (props) {

    const { books, onChageShelf } = props

    return(
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>

        <Shelf
          books={books.filter(book => book.shelf === "currentlyReading" )}
          title='Currently reading'
          onChageShelf={onChageShelf}
        />
        <Shelf
          books={books.filter(book => book.shelf === "wantToRead" )}
          title='Want to read'
          onChageShelf={onChageShelf}        />
        <Shelf
          books={books.filter(book => book.shelf === "read" )}
          title='Read'
          onChageShelf={onChageShelf}
        />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>)

}

export default ListBooks
