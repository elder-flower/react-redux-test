import React, { useState, useEffect, useRef } from 'react';
import './index.css';

export default function App() {
  const [count, setCount] = useState(10);
  // useRef に　0 を渡しているので、prevCountRef.current の初期値は 0
  const prevCountRef = useRef(0);

  useEffect(() => {
    // ref オブジェクトが更新されてもコンポーネントは再レンダーされない。
    prevCountRef.current = count;
  });

  return (
    <>
      <p>
        現在のcount: {count}, 前回のcount: {prevCountRef.current}
      </p>
      <p>前回のcountより{prevCountRef.current > count ? '小さい' : '大きい'}</p>
      <button onClick={() => setCount(Math.floor(Math.random() * 11))}>
        update
      </button>
    </>
  );
}