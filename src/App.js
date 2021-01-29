import React, { useRef } from "react";
import './index.css';

export default function App() {
  const inputEl = useRef(null);
  const onClick = () => {
    if (!inputEl.current) return;

    inputEl.current.focus();
  };

  return (
    <>
      {/* ref 属性に inputEl を指定することで、inputEl.current で DOM にアクセスできる */}
      <input ref={inputEl} type="text" />
      <button onClick={onClick}>input要素をフォーカスする</button>
    </>
  );
}