function Child({ name, age, color }) {
  return (
    <div style={{ backgroundColor: color, textAlign: "center" }}>
      Hi I am {name} <br /> My age is {age}
    </div>
  );
}

export default Child;
