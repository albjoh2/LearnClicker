import { FC } from "react";

interface CounterProps {
  count: number;
}

const Counter: FC<CounterProps> = ({ count }) => {
  return <h3 style={{ userSelect: "none" }}>{count.toFixed(0)}</h3>;
};

export default Counter;
