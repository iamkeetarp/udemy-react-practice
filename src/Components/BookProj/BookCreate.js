import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, id);
    setTitle("");
    setId(0);
  };

  const handleChange = (e) => {
    let bookName = e.target.value;

    setTitle(bookName);
    setId(Math.floor(Math.random() * 1000));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="form-control mx-auto w-25 mt-2"
          placeholder="Book Name"
          onChange={handleChange}
          value={title}
          id="bookName"
        />
        <button className="btn btn-success my-1 btn-sm">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
