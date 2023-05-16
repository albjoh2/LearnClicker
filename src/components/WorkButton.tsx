import { FC, useState } from "react";

interface WorkButtonProps {
  itemName: string;
  exp: number;
  setExp: (count: number) => void;
  currency: number;
  setCurrency: (currency: number) => void;
  setup: number;
  moneyPerSec: number;
  setMoneyPerSec: (moneyPerSecond: number) => void;
}

const WorkButton: FC<WorkButtonProps> = ({
  itemName,
  exp,
  setExp,
  setup,
  moneyPerSec,
  setMoneyPerSec,
}) => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (progress >= 100) {
      setMoneyPerSec(moneyPerSec + setup + exp / 1000);
    } else {
      setExp(exp + 1);
      setProgress(progress + setup + exp / 1000);
    }
  };
  return (
    <li onClick={handleClick}>
      {itemName}
      <progress value={progress} max="100" />
    </li>
  );
};

export default WorkButton;
