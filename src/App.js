import React, { useState, useContext, createContext } from "react";
import './index.css';

// Context オブジェクト
const MyContext = createContext();

export default function App() {
  const [count, setCount] = useState(0);
  const value = {
    name: "soarflat",
    handleClick: () => setCount((count) => count + 1)
  };

  return (
    <div>
      <p>count: {count}</p>
      {/* Provider。value プロパティの値を共有する。 */}
      <MyContext.Provider value={value}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  return <GreatGrandChild />;
}

function GreatGrandChild() {
  // Provider（<MyContext.Provider value={value}>）から
  // Context オブジェクトの値（value プロパティの値）を取得する。
  // そのため、context は
  // {
  //   name: 'soarflat',
  //   handleClick: () => setCount(count => count + 1)
  // }
  // になる。
  const context = useContext(MyContext);

  return (
    <>
      <p>{context.name}</p>
      <button onClick={context.handleClick}>increment</button>
    </>
  );
}