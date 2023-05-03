import "../../../App.css";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      {count}
      <button onClick={()=>setCount(count + 1)}>add 1</button>
      <button onClick={()=>setCount(count + 5)}>add 5</button>
      <button onClick={()=>setCount(count - 1)}>minus 1</button>
      <button onClick={()=>setCount(count - 5)}>minus 5</button>
    </div>
  );
}

export default Counter;
