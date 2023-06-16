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
      <div className="book">
        <div className="details">
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <button type="button" onClick={handleDelete} className="btn-delete">
          Delete
        </button>
      </div>
    </li>
  );
}
