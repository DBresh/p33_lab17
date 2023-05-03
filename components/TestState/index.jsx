import "../../App.css";
import React, { useState } from "react";
import Counter from "./Counter";

function TestState() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />

    </div>
  );
}

export default TestState;
