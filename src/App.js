import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const value = {
    name: "soarflat",
    handleClick: () => setCount((count) => count + 1)
  };

  return (
    <div>
      <p>count: {count}</p>
      <Child>
        <GrandChild>
          <GreatGrandChild value={value} />
        </GrandChild>
      </Child>
    </div>
  );
}

function Child({ children }) {
  console.log('Child');
  return <>{children}</>;
}

function GrandChild({ children }) {
  console.log('GrandChild');
  return <>{children}</>;
}

function GreatGrandChild({ value }) {
  console.log('GreatGrandChild');
  return (
    <>
      <p>{value.name}</p>
      <button onClick={value.handleClick}>increment</button>
    </>
  );
}