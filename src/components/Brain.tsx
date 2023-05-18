import { FC, useState, useEffect } from "react";
import Counter from "./Counter";

interface BrainProps {
  setCount: (count: number) => void;
  count: number;
  img: string;
}

const Brain: FC<BrainProps> = ({ setCount, count, img }) => {
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
    setScale(1.1); // Increase the scale temporarily
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(1); // Reset the scale back to its original value
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div onClick={handleClick} style={{ padding: "20px", cursor: "pointer" }}>
      <Counter count={count} />
      <img
        id="brain"
        src={img}
        width={"150px"}
        style={{ userSelect: "none", transform: `scale(${scale})` }}
      />
    </div>
  );
};

export default Brain;
