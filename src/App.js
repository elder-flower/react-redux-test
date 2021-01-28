import React, { useState, useEffect } from "react";
// HTTP 通信をするモジュール（外部 API などと通信する時に利用する）
import axios from "axios";
import './index.css';



export default function App() {
  // API から取得したデータ
  const [items, setItems] = useState([]);
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false);
  /*
  console.log('isLoading');
  console.log( isLoading );
  */

  // コンポーネントが初めてレンダーされた後に外部 API からデータを取得し、state を更新する副作用。
  // useEffect の第２引数（今回は空の配列）を指定しないと、items や isLoading が更新され、
  // コンポーネントが再レンダーされる度に API との通信が発生してしまう。
  // 今回はコンポーネントがレンダーされた後に、１度だけこの処理を実行したいので、第２引数に [] を渡している。
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=react"
      );

      setItems(result.data.hits);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
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