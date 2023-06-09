import { useState } from 'react';

const BookForm = (prop) => {
  const { handleAddBook } = prop;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      setError('Enter Book Title and Author');
      return;
    }
    handleAddBook({ title, author });
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Book</h3>
      <div className="form-control">
        <label htmlFor="title">
          Book Title:
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="author">
          Book Author:
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
      </div>
      <div>
        {error}
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
