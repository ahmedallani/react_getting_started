import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";
const wrap = (fn, ...args) => {
  return function (...newargs) {
    return fn(...args, ...newargs);
  };
};
function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const inc = wrap(dispatch, increment());
  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>{counter}</div>
    </div>
  );
}
export default Counter;
