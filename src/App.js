import React, { useState } from 'react';
import './index.css';

const Counter = ({ decrement, increment, reset }) => {
  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(currentCount => currentCount - 1);
  };

  const increment = () => {
    setCount(currentCount => currentCount + 1);
  };

  const reset = () => {
    setCount(() => 0);
  };

  return (
    <>
      <p>Count: {count}</p>
      <Counter decrement={decrement} increment={increment} reset={reset} />
    </>
  );
}