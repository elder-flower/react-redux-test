import React, { useState, useMemo } from "react";
import './index.css';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 引数の数値を２倍にして返す。
  // 不要なループを実行しているため計算にかなりの時間がかかる。
  const double = count => {
      console.log('func double');
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

  // count2 を２倍にした値をメモ化する。
  // 第２引数に count2 を渡しているため、count2 が更新された時だけ値が再計算される。
  // count1 が更新され、コンポーネントが再レンダリングされた時はメモ化した値を利用するため再計算されない。
  const doubledCount = useMemo(() => double(count2), [count2]);

  return (
    <>
      <h2>Increment(fast)</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment(fast)</button>

      <h2>Increment(slow)</h2>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment(slow)</button>
    </>
  );
}