import React, { useState } from "react";

function State() {
  const [animal, setAnimal] = useState(0);
  const handleClick = () => {
    setAnimal(animal + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Add Animal</button>

      <h3>Animal is : {animal}</h3>
    </>
  );
}

export default State;
