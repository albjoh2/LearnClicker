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
  difficulty: number;
}

const WorkButton: FC<WorkButtonProps> = ({
  itemName,
  exp,
  setExp,
  setup,
  moneyPerSec,
  setMoneyPerSec,
  difficulty,
}) => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (progress >= 100) {
      setMoneyPerSec(moneyPerSec + ((setup + exp) * difficulty) / 100000000000);
    } else {
      setExp(exp + 1);
      setProgress(progress + (setup * exp) / (difficulty * 1000));
    }
  };
  return (
    <li
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 10px",
        alignItems: "center",
      }}
    >
      {itemName}
      <progress value={progress} max="100" />
    </li>
  );
};

export default WorkButton;
