import React from "react";
import Book from "./Book";


const BookShelf = ({title, books, shelfSelect, showSearchPage}) => {

  return(
    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
     
      { books.map((book) => (
          <li key={book.id}>
            <Book  book={book} shelfSelect={shelfSelect} showSearchPage={showSearchPage} shelf={book.shelf} />
          </li>
          ))
      }
       
      </ol>
    </div>
  </div>

  )
}
export default BookShelf; 