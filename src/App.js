import React, { useState, useCallback } from 'react';

const Counter = React.memo(({ decrement, increment, reset }) => {
  console.log('render Counter');
  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </>
  );
});

export default function App() {
  const [count, setCount] = useState(0);

  const decrement = useCallback(() => {
    setCount(currentCount => currentCount - 1);
  }, [setCount]);

  const increment = useCallback(() => {
    setCount(currentCount => currentCount + 1);
  }, [setCount]);

  const reset = useCallback(() => {
    setCount(() => 0);
  }, [setCount]);

  return (
    <>
      <p>Count: {count}</p>
      <Counter decrement={decrement} increment={increment} reset={reset} />
    </>
  );
}