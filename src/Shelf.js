import React from 'react';
//import * as BooksAPI from './BooksAPI'
import Book from './Book'

function Shelf (props) {

      const { books, title, onChageShelf  } = props
      return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
          	<Book
            books={books}
            title={title}
            onChageShelf={onChageShelf}
            />
          </div>
        </div>
      )
}


export default Shelf
