import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function BookItem(prop) {
  const dispatch = useDispatch();
  const { book: { author, title }, id } = prop;

  const handleDelete = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
