import React, { createContext, useContext, useReducer } from 'react';
import './index.css';

const CountStateContext = createContext();
const CountDispatchContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 };
    }
    case 'DECREMENT': {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  // CountStateContext.Provider の value が更新したら、
  // CountStateContext の値を取得している全ての Consumer が再レンダーされる。
  // CountDispatchContext.Provider の value が更新したら、
  // CountDispatchContext の値を取得している全ての Consumer が再レンダーされる。
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

function Count() {
  console.log('render Count');
  // state と dispatch を保持する Context オブジェクトが異なるので、
  // dispatch が更新されてもこのコンポーネントは再レンダーされない。
  const state = useContext(CountStateContext);

  return <h1>{state.count}</h1>;
}

function Counter() {
  console.log('render Counter');
  // state と dispatch を保持する Context オブジェクトが異なるので、
  // state が更新されてもこのコンポーネントは再レンダーされない。
  const dispatch = useContext(CountDispatchContext);

  return (
    <>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
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
