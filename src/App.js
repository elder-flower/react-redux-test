import React, { useState, useCallback } from "react";
import './index.css';

export default function App() {
  console.log("render App");

  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("memonized callback");
  }, []);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={handleClick}>logging</button>
    </>
  );
}