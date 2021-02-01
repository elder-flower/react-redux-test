import React, { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();

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

  // CountContext.Provider の value の更新による Counter コンポーネントの
  // 再レンダーは避けられない。そのため、このコンポーネントは CountContext から値を
  // 取得するだけにして、メモ化したコンポーネントに取得した dispatch を渡すようにする。
  return <DispatchButton dispatch={dispatch} />;
}

// dispatch を Props として受け取るコンポーネントをメモ化し、不要な再レンダーを防ぐ
const DispatchButton = React.memo(({ dispatch }) => {
  console.log('render DispatchButton');

  return (
    <>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>
  );
});

export default function App() {
  return (
    <CountProvider>
      <Count />
      <Counter />
    </CountProvider>
  );
}