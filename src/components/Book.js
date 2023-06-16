import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';

export default function BookItem(prop) {
  const dispatch = useDispatch();
  const { book: { author, title, category }, id } = prop;

  const handleDelete = () => {
    dispatch(delBook(id));
  };

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{category}</p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
