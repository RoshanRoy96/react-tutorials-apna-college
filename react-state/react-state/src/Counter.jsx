function Counter() {
  let count = 0;

  function incrementCounter() {
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incrementCounter}>Increase Count</button>
    </div>
  );
}

export default Counter;
