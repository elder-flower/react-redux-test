import React, { useState, useEffect } from "react";
import './index.css';

export default function App() {
  const [count, setCount] = useState(0);

  // <p id="effectHook"></p> から取得したテキストをコンソールに出力する副作用。
  // 今回の場合、App コンポーネントが再レンダーされる度に実行される。
  // 副作用はコンポーネントのレンダー後に実行されるため、App コンポーネントの
  // レンダーで生成された <p id="effectHook"></p> も操作できる。
  // コンポーネントは state が更新される度にレンダーされるため、App コンポーネントは
  // count が更新される度に再レンダーされる。そのため、ボタンをクリックする度に
  // App コンポーネントは再レンダーされ、この副作用も実行される。
  useEffect(() => {
    console.log(document.getElementById("effectHook").innerText);
  });

  return (
    <div>
      <p id="effectHook">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}