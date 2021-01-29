import React, { useReducer } from 'react';

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

const Counter = ({ dispatch }) => {
  return (
    <>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCEREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </>
  );
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <Counter dispatch={dispatch} />
    </>
  );
}
