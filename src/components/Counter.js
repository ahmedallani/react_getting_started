import React, { useState } from "react";
function Counter() {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <div>{counter}</div>
    </div>
  );
}
export default Counter;
