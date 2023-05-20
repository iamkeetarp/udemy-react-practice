import "./App.css";
import BookCreate from "./Components/BookProj/BookCreate";
import { useState } from "react";
import BookList from "./Components/BookProj/BookList";
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

  const createBook = (title, id) => {
    //BAD CODE !
    // books.push({ id: 123, title: title });
    // console.log(books);
    // setBooks(books);

    //Good Code

    const updatedBooks = [...books, { id: id, title: title }];
    setBooks(updatedBooks);
  };

  const editBook = (title, id) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
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
