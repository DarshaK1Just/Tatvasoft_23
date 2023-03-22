import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="d13">
      <h3>Count - {count}</h3>
      <button onClick={increment} className="b1">Increment</button>
      <button onClick={decrement} className="b2">Decrement</button>
      </div>
    </>
  );
}

export default CounterHook;
