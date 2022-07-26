import React from "react";
import { Link } from "react-router-dom"; 
import BookShelf from "../components/BookShelf";

const Home=( {books, shelfSelect} )=>{

    return ( 
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
 
                <BookShelf title='Currently Reading' books={ books.filter((book)=>book.shelf === 'currentlyReading' ) } shelfSelect={shelfSelect} />             
                <BookShelf title='Want to Read' books={ books.filter((book)=>book.shelf === 'wantToRead' ) } shelfSelect={shelfSelect}  />
                <BookShelf title='Read' books={ books.filter((book)=>book.shelf === 'read' ) } shelfSelect={shelfSelect} />


            </div>
          </div>
          <div className="open-search">
          <Link to="/Search">Add a book</Link>
            
          </div>
        </div>
    ) 
}; 
export default Home; 