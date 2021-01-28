import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [vote, setVote] = useState({ kinoko: 0, takenoko: 0 });

  const voteKinoko = () => {
    // 以下のように state を更新してしまうと、React は state が
    // 更新されていないと判定するのでコンポーネントが再レンダーされない。
    vote.kinoko = vote.kinoko + 1;
    setVote(vote);
  };

  const voteTakenoko = () => {
    // 以下のように state を更新してしまうと、React は state が
    // 更新されていないと判定するのでコンポーネントが再レンダーされない。
    vote.takenoko = vote.takenoko + 1;
    setVote(vote);
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
