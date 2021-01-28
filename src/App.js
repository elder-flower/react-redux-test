import React, { useState } from "react";
import './index.css';

export default function App() {
  const [items, setItems] = useState([{ name: "きのこ" }]);

  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
    };
    // 以下のように state を更新してしまうと、React は state が
    // 更新されていないと判定するのでコンポーネントが再レンダーされない。
    items.push(newItem);
    setItems(items);
  };

  // 引数 index は削除したい要素のインデックス
  const deleteItem = (index) => {
    // 以下のように state を更新してしまうと、React は state が
    // 更新されていないと判定するのでコンポーネントが再レンダーされない。
    items.splice(index, 1);
    //console.log( items );
    setItems(items);
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