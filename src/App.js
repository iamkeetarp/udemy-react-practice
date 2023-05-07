import "./App.css";
import { useState } from "react";
// import Child from "./Components/Child";
// import StateExample from "./Components/State";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import searchImages from "./api";
function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      {/* <Child name="Prateek" age={23} color="pink" /> */}
      {/* <StateExample /> */}
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
