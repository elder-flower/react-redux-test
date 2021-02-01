import React, { useState } from "react";

function useCounter(initialCount) {
  console.log('useCounter Render');
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

function Counter1() {
  console.log('Counter1 Render');
  const { count, increment } = useCounter(0);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={increment}>+</button>
    </>
  );
}

function Counter2() {
  console.log('Counter2 Render');
  const { count, decrement } = useCounter(10);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={decrement}>-</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;