import React, { useState } from 'react';
import booksList from './data';
import BookForm from './BookForm';

const Books = () => {
  const [books, setBooks] = useState(booksList);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };
  return (
    <div>
      <BookForm handleAddBook={handleAddBook} />
      {
                    books.map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <h3>{book.title}</h3>
                          <p>{book.author}</p>
                        </div>
                      </li>
                    ))
                }
    </div>
  );
};

export default Books;
