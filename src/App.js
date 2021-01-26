import React, { useState } from "react";
import './index.css';

const Child = React.memo(props => {
  console.log("render Child");
  return <button onClick={props.handleClick}>Child</button>;
});

export default function App() {
  console.log("render App");

  const [count, setCount] = useState(0);
  // 関数はコンポーネントが再レンダリングされる度に再生成されるため、
  // 関数の内容が同じでも、新しい handleClick と前回の handleClick は
  // 異なるオブジェクトなので、等価ではない。
  // そのため、コンポーネントが再レンダリングされる。
  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  );
}