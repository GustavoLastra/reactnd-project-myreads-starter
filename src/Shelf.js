import React from 'react';
//import * as BooksAPI from './BooksAPI'
import Book from './Book'

function Shelf (props) {

      const { books, onChageShelf, title  } = props
      return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
          	<Book
            books={books}
            onChageShelf={onChageShelf}
            />
          </div>
        </div>
      )
}


export default Shelf
