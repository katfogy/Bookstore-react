import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBook } from '../redux/books/booksSlice';

export default function BookInput() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', category: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      dispatch(postBook({ item_id: uuid(), ...book }));
      setBook({ title: '', author: '', category: '' });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3 className="center py-5">Add a new book:</h3>
      <form onSubmit={addNewBook} className="form-control center">
        <input type="text" placeholder="Enter Book Title" name="title" value={book.title} onChange={handleChange} className="input-control" />
        <input type="text" placeholder="Enter Book Author" name="author" value={book.author} onChange={handleChange} className="input-control" />
        <input type="text" placeholder="Enter Book Category" name="category" value={book.category} onChange={handleChange} className="input-control" />
        <button type="submit" className="btn">Add</button>
      </form>
    </>
  );
}
