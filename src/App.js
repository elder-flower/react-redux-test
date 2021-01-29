import React, { useState, useMemo } from "react";
import './index.css';

export default function App() {
  console.log("render App");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 引数の数値を２倍にして返す。
  // 無駄なループを実行しているため計算にかなりの時間がかかる。
  const double = (count) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

  // レンダー結果（計算結果）をメモ化する
  // 第２引数に count2 を渡しているため、count2 が更新された時だけ再レンダーされる。
  // count1 が更新され、コンポーネントが再レンダーされた時はメモ化したレンダー結果を
  // 利用するため再レンダーされない。
  const Counter = useMemo(() => {
    console.log("render Counter");
    const doubledCount = double(count2);

    return (
      <p>
        Counter: {count2}, {doubledCount}
      </p>
    );
  }, [count2]);

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      {Counter}
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
}