import { useState } from "react";

function init() {
  console.log("init was executed");
  return Math.random();
}

function Counter() {
  let [count, setCount] = useState(init); // initialization.....react knows not to initialize each time at the time of re-rendering......
  console.log("Component was rendered");

  function incrementCounter() {
    // setCount((currCount) => {
    //   return currCount + 1;
    // });

    setCount((currCount) => {
      return currCount + 1;
    });
  } // count variable will update at the time of re-render stage not when calling function.....when the component re-render, the value of count will update.

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incrementCounter}>Increment Count</button>
    </div>
  );
}

export default Counter;
