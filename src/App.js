import React, { useState, useContext, createContext } from "react";
import './index.css';

// Context オブジェクト
const LangContext = createContext();

export default function App() {
  const [lang, setLang] = useState("JP");

  return (
    <>
      <button onClick={() => setLang("JP")}>日本語</button>
      <button onClick={() => setLang("EN")}>English</button>
      <LangContext.Provider value={lang}>
        <Header />
        <Body />
      </LangContext.Provider>
    </>
  );
}

function Header() {
  const lang = useContext(LangContext);
  const text = {
    JP: "速習 React Hooks",
    EN: "React Hooks Quick Start Guide"
  };

  return (
    <header>
      <h1>{text[lang]}</h1>
    </header>
  );
}

function Body() {
  const lang = useContext(LangContext);
  const text = {
    JP: "useContext の利用例",
    EN: "useContext Example"
  };

  return <p>{text[lang]}</p>;
}
