import React, { useState, useEffect } from "react";
import './index.css';

export default function App() {
  const [count, setCount] = useState(0);
  // 初回レンダーかどうかのフラグ
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      // isInitialRender は state なので、
      // isInitialRender を更新したら再レンダーされる。
      setIsInitialRender(false);
    }
  }, [isInitialRender]);

  return (
    <>
      {/* レンダー後に副作用が実行され、isInitialRender が false に
      更新されるので、「初回レンダー」は表示されない。 */}
      <p>{isInitialRender ? "初回レンダー" : "再レンダー"}</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}