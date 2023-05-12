import { FC, useState } from "react";

interface BrainProps {
  setCount: (count: number) => void;
  count: number;
}

const Brain: FC<BrainProps> = ({ setCount, count }) => {
  const [scale, setScale] = useState(1);
  const handleClick = () => {
    setCount(count + 1);
    setScale(scale + 0.00001);
  };
  return (
    <div onClick={handleClick} style={{ padding: "20px", cursor: "pointer" }}>
      <img
        id="brain"
        src="/brain.svg"
        width={"200px"}
        style={{ userSelect: "none", scale: `${scale}` }}
      />
    </div>
  );
};

export default Brain;
