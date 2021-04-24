import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "counter/increment" })}>+</button>
      <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button>
      <div>{counter}</div>
    </div>
  );
}
export default Counter;
