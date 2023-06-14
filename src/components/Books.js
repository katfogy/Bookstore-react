import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';

export default function BookList() {
  const { bookItems } = useSelector((store) => store.books);

  return (
    <div>
      <BookForm />
      <h3>List of books:</h3>
      <ul>
        {bookItems.map((book) => (
          <Book key={book.id} id={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}
