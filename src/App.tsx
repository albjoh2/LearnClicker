import { useState } from "react";
import Brain from "./components/Brain";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count}></Counter>
      <Brain setCount={setCount} count={count}></Brain>
    </>
  );
}

export default App;
