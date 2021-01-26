import React, { useState, useEffect, useRef } from "react";
import './index.css';

const Child = React.memo(() => {
  console.log("render Child");
  return <p>Child</p>;
});

export default function App() {
  console.log("render App");

  const [timeLeft, setTimeLeft] = useState(100);
  const timerRef = useRef(null);
  /*
    「useRef()」生成時の第1引数は useRef(initialValue);
  */
  const timeLeftRef = useRef(timeLeft);

　/*
    毎回副作用が更新されるのを第二引数に対象プロパティを設定する事によってそのプロパティが変更された時のみ更新する。様に変更する。
 */
  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  const tick = () => {
    if (timeLeftRef.current === 0) {
      clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(prevTime => prevTime - 1);
  };

  const start = () => {
    timerRef.current = setInterval(tick, 10);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTimeLeft(100);
  };

  return (
    <>
      <button onClick={start}>start</button>
      <button onClick={reset}>reset</button>
      <p>App: {timeLeft}</p>
      <Child />
    </>
  );
}

