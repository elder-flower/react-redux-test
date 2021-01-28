import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [vote, setVote] = useState({ kinoko: 0, takenoko: 0 });

  const voteKinoko = () => {
    // 現在の vote に、kinoko プロパティ（現在の vote.kinoko + 1）を
    // マージしたオブジェクトを setVote に渡す。
    // 例えば、vote が以下の状態であれば
    // { kinoko: 0, takenoko: 0 }
    // 以下のように更新される
    // { kinoko: 1, takenoko: 0 }
    setVote({ ...vote, kinoko: vote.kinoko + 1 });
  };

  const voteTakenoko = () => {
    // 現在の vote に、takenoko プロパティ（現在の vote.takenoko + 1）を
    // マージしたを setVote に渡す。
    // 例えば、vote が以下の状態であれば
    // { kinoko: 0, takenoko: 0 }
    // 以下のように更新される
    // { kinoko: 0, takenoko: 1 }
    setVote({ ...vote, takenoko: vote.takenoko + 1 });
  };

  return (
    <>
      <p>きのこ: {vote.kinoko}</p>
      <p>たけのこ: {vote.takenoko}</p>
      <button onClick={voteKinoko}>きのこ</button>
      <button onClick={voteTakenoko}>たけのこ</button>
    </>
  );
}
