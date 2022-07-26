import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as BookAPI from './utils/BooksAPI';
import './css/App.css';
import Search from './pages/Search';
import Home from './pages/Home';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    BookAPI.getAll().then((res) => {
      setBooks(res);
    });
  }, []);

  const handleShelfSelect = async (id, shelf) => {
    await BookAPI.update(id, shelf);
    await BookAPI.getAll().then((res) => {
      setBooks(res);
    });
    handleSearchResults(searchString);
  };

  const handleSearchString = async (event) => {
    setSearchString(event.target.value);

    if (event.target.value === '') {
      setSearchResults([]);
    } else {
      handleSearchResults(searchString);
    }
  };

  const handleSearchResults = async (searchString) => {
    await BookAPI.search(searchString).then((res) => {
      if (res && !res.error) {
        setSearchResults(
          res.map((gotbooks) => {
            books.forEach((b) => {
              if (gotbooks.id === b.id) gotbooks.shelf = b.shelf;
            });
            return gotbooks;
          })
        );
      } else {
        setSearchResults([]);
      }
    });
  };
  return (
    <div className='App'>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home books={books} shelfSelect={handleShelfSelect} />}
        />
        <Route
          path='/search'
          element={
            <Search
              handleBookSearch={handleSearchString}
              searchString={searchString}
              searchResults={searchResults}
              shelfSelect={handleShelfSelect}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
