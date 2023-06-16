import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBook } from '../redux/books/booksSlice';
import { getDummyAuthor } from '../dummies';

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
      author: getDummyAuthor(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3 className="center py-5">Add a new book:</h3>
      <form onSubmit={addNewBook}>
        <input type="text" placeholder="Enter Book Title" name="title" value={book.title} onChange={handleChange} className="input-control" />
        <select
          className="select"
          name="category"
          value={book.category}
          onChange={handleChange}
        >
          <option value="action">action</option>
          <option value="science fiction">science fiction</option>
          <option value="economy">economy</option>
        </select>
        <button type="submit" className="btn">Add</button>
      </form>
    </>
  );
}
