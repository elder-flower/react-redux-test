import React, { useState } from "react";

function App() {
  // state
  const [count, setCount] = useState(0);

  // state 更新ロジック
  const increment = () => {
    setCount(count + 1);
  };

  // state 更新ロジック
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;