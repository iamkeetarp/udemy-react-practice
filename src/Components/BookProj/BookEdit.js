import { useState } from "react";

function BookEdit({ book, editBook }) {
  const [newTitle, setNewTitle] = useState(book.title);
  const handleTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    editBook(newTitle, book.id);
  };
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          onChange={handleTitle}
          className="form-control"
          type="text"
          value={newTitle}
        />
        <button className="btn btn-primary my-2">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
