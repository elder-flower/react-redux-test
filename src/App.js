import React, { useReducer } from 'react';
import './index.css';

// 現在の state と action を受け取り、action に応じて更新した state を返す関数
function reducer(state, action) {
  switch (action.type) {
    case 'INCEREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

export default function App() {
  // useReducer の第２引数に { count: 0 } を渡しているので、
  // state の初期値は { count: 0 }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>count: {state.count}</p>

      {/* { type: 'DECREMENT' } という action を送信する */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

      {/* { type: 'INCEREMENT' } という action を送信する */}
      <button onClick={() => dispatch({ type: 'INCEREMENT' })}>+</button>

      {/* { type: 'RESET' } という action を送信する */}
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </>
  );
}