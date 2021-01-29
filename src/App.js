import React, { useState } from 'react';
import './index.css';

const Child = React.memo(({ handleClick }) => {
  console.log('render Child');
  return <button onClick={handleClick}>Child</button>;
});

export default function App() {
  console.log('render App');

  const [count, setCount] = useState(0);
  // 関数はコンポーネントが再レンダーされる度に再生成されるため、
  // 関数の内容が同じでも、新しい handleClick と前回の handleClick は
  // 異なるオブジェクトなので、等価ではない。
  // そのため、コンポーネントが再レンダーされる。
  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  );
}