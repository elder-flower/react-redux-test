import React, { useState } from "react";
import './index.css';

export default function App() {
  // count という state と setCount という count を更新する関数を定義。
  // 今回、useState に 10 を渡しているため count の初期値は 10 になる。
  const [count, setCount] = useState(10);

  const decrement = () => {
    // setCount に count - 1 を渡しているので、
    // decrement が実行される度に、count が 1 減る。
    setCount(count - 1);
  };

  const increment = () => {
    // setCount に count + 1 を渡しているので、
    // increment が実行される度に、count が 1 増える。
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}