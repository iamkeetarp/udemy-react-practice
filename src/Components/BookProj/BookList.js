import BookShow from "./BookShow";

function BookList({ books, editBook, deleteBook }) {
  return books.map((book) => (
    <BookShow
      key={Math.random() * 100}
      book={book}
      id={book.id}
      editBook={editBook}
      deleteBook={deleteBook}
    />
  ));
}

export default BookList;
