import React, { useEffect } from 'react';
import * as reactRouterDom from 'react-router-dom';
import Book from '../components/Book';

const Search = ({
  handleBookSearch,
  searchString,
  searchResults,
  shelfSelect,
}) => {
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <reactRouterDom.Link to='/' className='close-search'>
          {' '}
          Close{' '}
        </reactRouterDom.Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            autoFocus
            placeholder='Search by title, author, or ISBN'
            onChange={handleBookSearch}
            value={searchString}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book key={book.id} book={book} shelfSelect={shelfSelect} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Search;
