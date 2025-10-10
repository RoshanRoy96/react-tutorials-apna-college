import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incrementCounter}>Increment Count</button>
    </div>
  );
}

export default Counter;
