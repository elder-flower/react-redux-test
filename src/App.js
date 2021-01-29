import React, { useState } from "react";
import './index.css';

export default function App() {
  const [count, setCount] = useState(0);
  const value = {
    name: "soarflat",
    handleClick: () => setCount((count) => count + 1)
  };

  return (
    <div>
      <p>count: {count}</p>
      <Child value={value} />
    </div>
  );
}

// Child コンポーネント自体は value を利用しないが、GrandChild コンポーネントに
// Props として渡すために、value を受け取る必要がある。
function Child({ value }) {
  return <GrandChild value={value} />;
}

// GrandChild コンポーネント自体は value を利用しないが、GreatGrandChild コンポーネントに
// Props として渡すために、value を受け取る必要がある。
function GrandChild({ value }) {
  return <GreatGrandChild value={value} />;
}

function GreatGrandChild({ value }) {
  return (
    <>
      <p>{value.name}</p>
      <button onClick={value.handleClick}>increment</button>
    </>
  );
}