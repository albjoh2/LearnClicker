import { FC } from "react";

interface BrainProps {
  setCount: (count: number) => void;
  count: number;
}

const Brain: FC<BrainProps> = ({ setCount, count }) => {
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: "brown", padding: "20px", cursor: "pointer" }}
    >
      <p style={{ userSelect: "none" }}>Brain</p>
    </div>
  );
};

export default Brain;
