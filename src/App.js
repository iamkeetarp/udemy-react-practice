import "./App.css";
import BookCreate from "./Components/BookProj/BookCreate";
import { useEffect, useState } from "react";
import BookList from "./Components/BookProj/BookList";
import axios from "axios";

// import Child from "./Components/Child";
// import StateExample from "./Components/State";
// import SearchBar from "./Components/SearchBar";
// import ImageList from "./Components/ImageList";
// import searchImages from "./api";
function App() {
  // const [images, setImages] = useState([]);

  // const handleSubmit = async (term) => {
  //   const result = await searchImages(term);
  //   setImages(result);
  // };

  const [books, setBooks] = useState([]);

  const getApiBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  const createBook = async (title, id) => {
    //BAD CODE !
    // books.push({ id: 123, title: title });
    // console.log(books);
    // setBooks(books);

    //Good Code

    // const updatedBooks = [...books, { id: id, title: title }];
    // setBooks(updatedBooks);
    const response = await axios.post("http://localhost:3001/books", {
      title,
      id,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  useEffect(() => {
    getApiBooks();
  }, []);

  const editBook = async (newtitle, id) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newtitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newtitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className="App">
      {/* <Child name="Prateek" age={23} color="pink" /> 
       <StateExample /> *
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} /> */}
      <BookCreate onCreate={createBook} />
      <BookList books={books} editBook={editBook} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
