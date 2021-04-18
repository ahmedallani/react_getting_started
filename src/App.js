import React, { useState } from "react";
import Display from "./Display";
import NumberContext from "./Context";
// Create a Context
// It returns an object with 2 values:
// { Provider, Consumer }
function useCounter(initial) {
  let [counter, setCounter] = useState(initial);
  const increment = () => setCounter(counter+1);
  return [counter, increment];
}
function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  const [counter, increment] = useCounter(0);
  return (
    <NumberContext.Provider value={[counter, increment]}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

export default App;
