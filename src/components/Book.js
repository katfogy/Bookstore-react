import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';
import { getDummyProgress, getDummyChapter } from '../dummies';

export default function BookItem(prop) {
  const dispatch = useDispatch();
  const {
    book: { author, title, category }, id,
  } = prop;

  const handleDelete = () => {
    dispatch(delBook(id));
  };

  return (
    <li>
      <div className="book">
        <div className="details">
          <p>{category}</p>
          <h3 className="title">{title}</h3>
          <p>{author}</p>
          <div className="btn-func">
            <button type="button" onClick={() => {}} className="btn-single">
              Comment
            </button>
            <button type="button" onClick={handleDelete} className="btn-single">
              Delete
            </button>

            <button type="button" onClick={() => {}} className="btn-single">
              Edit
            </button>
          </div>
        </div>
        <p className="circle">
          <CircularProgressbar
            strokeWidth={5}
            value={getDummyProgress()}
          />
          {' '}
          {
            getDummyProgress()
          }
          %
        </p>
        <div className="chapter-details">
          <p>Current Chapter</p>
          <h4>{getDummyChapter()}</h4>
          <button type="button" className="progress-btn">Update Progress</button>
        </div>

      </div>
    </li>
  );
}
