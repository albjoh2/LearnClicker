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
    if (progress >= 200) {
      console.log("You can't work on this anymore, you are done!");
    } else if (progress >= 100) {
      setMoneyPerSec(moneyPerSec + ((setup + exp) * difficulty) / 100000000);
      setExp(exp + 1);
      setProgress(progress + 1);
    } else {
      setExp(exp + 1);
      setProgress(
        Math.min(progress + (setup * exp) / (difficulty * 1000), 101)
      );
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
      <p style={{ fontSize: "10px", width: "50px", display: "block" }}>
        {itemName}
      </p>
      {progress <= 100 ? (
        <progress className="progressLow" value={progress} max="100" />
      ) : (
        <progress className="progressHigh" value={progress - 100} max="100" />
      )}
      {progress <= 100 ? (
        <p style={{ fontSize: "10px", width: "50px", display: "block" }}>
          Building
        </p>
      ) : progress < 200 ? (
        <p style={{ fontSize: "10px", width: "50px", display: "block" }}>
          Refining
        </p>
      ) : (
        <p style={{ fontSize: "10px", width: "50px", display: "block" }}>
          Done
        </p>
      )}
    </li>
  );
};

export default WorkButton;
