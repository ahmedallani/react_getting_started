import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <div>{counter}</div>
    </div>
  );
}
export default Counter;
