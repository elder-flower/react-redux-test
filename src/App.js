import React, { createContext, useContext, useReducer } from 'react';
import './index.css';

const CountContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 };
    }
    case 'DECREMENET': {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = {
    state,
    dispatch
  };

  return (
    // value（state か dispatch のどちらか）が更新したら、
    // CountContext.Provider 内のすべての Consumer が再レンダーされる。
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

function Count() {
  console.log('render Count');
  // CountContext からは state のみを取得しているが、
  // dispatch が更新されても再レンダーされる
  const { state } = useContext(CountContext);

  return <h1>{state.count}</h1>;
}

function Counter() {
  console.log('render Counter');
  // CountContext からは dispatch のみを取得しているが、
  // state が更新されても再レンダーされる
  const { dispatch } = useContext(CountContext);

  return (
    <>
      <button onClick={() => dispatch({ type: 'DECREMENET' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>
  );
}

export default function App() {
  return (
    <CountProvider>
      <Count />
      <Counter />
    </CountProvider>
  );
}