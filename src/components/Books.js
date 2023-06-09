import React, { useState } from 'react';
import booksList from './data';
import BookForm from './BookForm';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState(booksList);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <div>
      <BookForm handleAddBook={handleAddBook} />
      {
                    books.map((book) => <Book key={book.id} deleteBook={deleteBook} book={book} />)
                }
    </div>
  );
};

export default Books;
