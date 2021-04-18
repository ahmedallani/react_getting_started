import React, { useContext } from "react";
import NumberContext from "./Context";
function Display() {
  const [counter, increment] = useContext(NumberContext);
  return (
    <>
      <button onClick={increment}>increment</button>
      <div>The answer is {counter}.</div>
    </>
  );
}
export default Display;
