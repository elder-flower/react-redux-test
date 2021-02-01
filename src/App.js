import React, { useState } from "react";

// カウンターの state と state 更新ロジックを持つカスタムフック
// カスタムフックの名前は必ず use から始まる必要がある。
function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

function App() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;