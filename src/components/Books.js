import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookForm from './BookForm';
import Book from './Book';
import { selectBooks } from '../redux/store';
import { getBooks } from '../redux/books/booksSlice';

export default function BookList() {
  const {
    bookItems, getStatus, postStatus, delStatus,
  } = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (getStatus.loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (getStatus.error) {
    return (
      <div>
        <h3>An error occurred:</h3>
        <pre>{getStatus.errMsg}</pre>
      </div>
    );
  }

  return (
    <div className="container-center">
      <p>{postStatus.loading ? 'Posting...' : ''}</p>
      <p>{delStatus.loading ? 'Deleting...' : ''}</p>
      <pre>{postStatus.error ? postStatus.errMsg : ''}</pre>
      <pre>{delStatus.error ? delStatus.errMsg : ''}</pre>
      <h3 className="center py-5">List of books:</h3>
      <ul>
        {bookItems.map((book) => (
          <Book key={book.id} id={book.id} book={book} />
        ))}
      </ul>
      <BookForm />
    </div>
  );
}
