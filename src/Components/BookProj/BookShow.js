import Card from "react-bootstrap/Card";
import "font-awesome/css/font-awesome.min.css";
import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../../context/books";

function BookShow({ book, id, editBook, deleteBook }) {
  const { count, incrementCount } = useContext(BooksContext);
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
      <Card style={{ width: "10rem" }}>
        {count}
        <button className="btn btn-success" onClick={incrementCount}>
          Increment Count
        </button>
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
