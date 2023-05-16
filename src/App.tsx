import { useState, useEffect } from "react";
import Brain from "./components/Brain";
import Upgrades from "./components/Upgrades";
import Work from "./components/Work";

import "./App.css";

function App() {
  const [exp, setExp] = useState(0);
  const [money, setMoney] = useState(0);
  const [setup, setSetup] = useState(0);
  const [expPerSec, setExpPerSec] = useState(0);
  const [moneyPerSec, setMoneyPerSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExp((prevExp) => prevExp + expPerSec);
    }, 1000); // Increment every second

    return () => {
      clearInterval(interval);
    };
  }, [expPerSec]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney((prevMoney) => prevMoney + moneyPerSec);
    }, 1000); // Increment every second

    return () => {
      clearInterval(interval);
    };
  }, [money]);

  return (
    <>
      <Upgrades
        setExp={setExp}
        exp={exp}
        money={money}
        setMoney={setMoney}
        setup={setup}
        setSetup={setSetup}
        expPerSec={expPerSec}
        setExpPerSec={setExpPerSec}
      />
      <p>exp/s: {expPerSec.toFixed(3)}</p>
      <p>money/s: {moneyPerSec.toFixed(3)}</p>
      <div style={{ display: "flex" }}>
        <Brain img={"/brain.svg"} setCount={setExp} count={exp} />

        <Brain img={"/setup.jpg"} setCount={setSetup} count={setup} />
      </div>
      <Brain img={"/money.jpg"} setCount={setMoney} count={money} />
      <Work
        setExp={setExp}
        exp={exp}
        money={money}
        setMoney={setMoney}
        setup={setup}
        expPerSec={expPerSec}
        setExpPerSec={setExpPerSec}
        moneyPerSec={moneyPerSec}
        setMoneyPerSec={setMoneyPerSec}
      />
    </>
  );
}

export default App;
