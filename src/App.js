import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [items, setItems] = useState([{ name: "きのこ" }]);

  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
    };
    //console.log( ...items );
    // 現在の items に newItem を追加した配列を setItems に渡す。
    setItems([...items, newItem]);
  };

  // 引数 index は削除したい要素のインデックス
  const deleteItem = (index) => {
    //, 現在の items から、引数 index と同じインデックスの要素を
    // 削除した配列を setItems に渡す。
      /*
      console.log( items.filter(($, i) => {
          console.log( $ );
          return i !== index;
      }) );
      */
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <button onClick={addItem}>「きのこ」か「たけのこ」を追加</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deleteItem(index)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}