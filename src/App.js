import React, { useState } from "react";
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

  // App コンポーネントが再レンダーされたら
  // このコンポーネントも必ず再レンダーされる
  const Counter = React.memo((props) => {
    console.log("render Counter");
    const doubledCount = double(props.count2);

    return (
      <p>
        Counter: {props.count2}, {doubledCount}
      </p>
    );
  });

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      <Counter count2={count2} />
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
}