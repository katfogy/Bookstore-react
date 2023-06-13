import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function BookItem(prop) {
  const dispatch = useDispatch();
  const { id, title } = prop;

  const handleDelete = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <li>
      <div>
        <p>{title}</p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
