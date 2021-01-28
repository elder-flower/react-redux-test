import React, { useState } from 'react';
import './index.css';


export default function App() {
  // count という state と setCount という count を更新する関数を定義。
  // 今回、useState に 10 を渡しているため count の初期値は 10 になる。
  const [count, setCount] = useState(10);

  const decrement = () => {
    // 引数に渡した関数（(currentCount) => currentCount - 1）の
    // 引数（currentCount）には現在の count が渡される。
    // 関数の戻り値が新しい count になるため、
    // decrement が実行される度に count が 1 減る。
    setCount(currentCount => currentCount - 1);
  };

  const increment = () => {
    // 引数に渡した関数（(currentCount) => currentCount + 1）の
    // 引数（currentCount）には現在の count が渡される。
    // 関数の戻り値が新しい count になるため、
    // increment が実行される度に count が 1 増える。
    setCount(currentCount => currentCount + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}