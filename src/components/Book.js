const Book = (prop) => {
  const { book, deleteBook } = prop;
  return (
    <li>
      <div className="book">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <button type="button" onClick={() => deleteBook(book.id)}>Delete</button>
    </li>
  );
};
export default Book;
