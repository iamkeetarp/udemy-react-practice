import Card from "react-bootstrap/Card";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, id, editBook, deleteBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const deleteHandler = () => {
    deleteBook(id);
  };

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} editBook={editBook} />;
  }
  return (
    <>
      <Card style={{ width: "12rem" }}>
        <div>
          <i
            style={{ cursor: "pointer", color: "blue" }}
            className="fa fa-pencil fs-2 mx-3"
            onClick={editHandler}
          ></i>
          <i
            style={{ cursor: "pointer", color: "red" }}
            className="fa fa-times fs-2 mx-3"
            onClick={deleteHandler}
          ></i>
        </div>

        <Card.Img
          variant="top"
          src="https://picsum.photos/seed/picsum/200/200"
        />
        <Card.Body>
          <Card.Title>{content}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default BookShow;
