import React, { Component } from "react";
// Create a Context
const { Provider, Consumer } = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <Provider value={43}>
      <div>
        <Display />
      </div>
    </Provider>
  );
}

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return <Consumer>{(value) => <div>The answer is {value}.</div>}</Consumer>;
}
export default App;
