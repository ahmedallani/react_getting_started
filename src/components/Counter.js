import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAsync } from "../actions/counter";

function Counter() {
  const [value, setValue] = useState(1);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <input value={value} onChange={({ target }) => setValue(target.value)} />
      <button onClick={() => dispatch(increment(value))}>+</button>
      <button onClick={() => dispatch(decrement(value))}>-</button>
      <button onClick={() => dispatch(incrementAsync(value,1000))}>+ after time</button>
      <div>{counter}</div>
    </div>
  );
}
export default Counter;
