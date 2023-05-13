import { useState, useEffect } from "react";
import Brain from "./components/Brain";
import Counter from "./components/Counter";
import Upgrades from "./components/Upgrades";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [pointsPerSec, setPointsPerSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + pointsPerSec);
    }, 1000); // Increment every second

    return () => {
      clearInterval(interval);
    };
  }, [pointsPerSec]);

  return (
    <>
      <Upgrades
        setCount={setCount}
        count={count}
        pointsPerSec={pointsPerSec}
        setPointsPerSec={setPointsPerSec}
      />
      <Counter count={count} />
      <Brain setCount={setCount} count={count} />
    </>
  );
}

export default App;
