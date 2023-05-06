import React, { useState } from "react";

function getRandomAnimal() {
  const animal = ["cow", "dog", "fox", "cat", "lion", "tiger"];
  return animal[Math.floor(Math.random() * animal.length)];
}
function State() {
  const [animal, setAnimal] = useState([]);
  const handleClick = () => {
    setAnimal([...animal, getRandomAnimal()]);
  };
  return (
    <>
      <button onClick={handleClick}>Add Animal</button>

      <h3>Animal is : {animal}</h3>
    </>
  );
}

export default State;
