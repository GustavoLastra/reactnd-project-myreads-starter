import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

    render() {
      const { books, title } = this.props
      let showingBooks= books
      return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {showingBooks.map((book)=>(
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select

                        onChange={(event) => this.props.onChageShelf(event.target.value, book)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="none">None</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            ))}
            </ol>
            </div>
            </div>

      )
    }
}
export default Shelf
