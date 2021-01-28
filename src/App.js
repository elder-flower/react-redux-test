import React, { useState, useEffect } from "react";
// HTTP 通信をするモジュール（外部 API などと通信する時に利用する）
import axios from "axios";
import './index.css';

export default function App() {
  // 外部 API から取得したデータ
  const [items, setItems] = useState([]);
  // input（入力欄）に入力した値
  const [inputValue, setInputValue] = useState("react");
  // 外部 API にリクエスト時に付与するクエリパラメータ
  const [query, setQuery] = useState(inputValue);
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false);

  // 外部 API からデータを取得し、state を更新する副作用。
  // 第２引数に [query] を指定しているので、query が更新されたら実行される。
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );

      setItems(result.data.hits);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(inputValue);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">検索</button>
      </form>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}