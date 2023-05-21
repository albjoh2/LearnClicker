import { FC, useState, useEffect } from "react";

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
  payPerSec: number;
}

const WorkButton: FC<WorkButtonProps> = ({
  itemName,
  exp,
  setExp,
  setup,
  moneyPerSec,
  setMoneyPerSec,
  difficulty,
  payPerSec,
}) => {
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const handleClick = () => {
    if (progress >= 200) {
      console.log("You can't work on this anymore, you are done!");
    } else if (progress >= 100) {
      setMoneyPerSec(moneyPerSec + payPerSec);
      setExp(exp + 1);
      setProgress(progress + 1);
    } else {
      setExp(exp + 1);
      setProgress(
        Math.min(progress + (setup * exp) / (difficulty * 1000), 101)
      );
    }
  };

  useEffect(() => {
    if (
      itemName === "Solve artificial general intelligence" &&
      progress >= 200
    ) {
      // get the time when the user solved AGI
      const endTime = new Date().getTime();

      // calculate the time difference and show in minutes and seconds
      const timeDiff = endTime - startTime!;

      alert(
        `You have solved AGI! Congratulations on finishing the game! It took you ${
          Math.floor(timeDiff / 60000) % 60
        } minutes and ${
          Math.floor(timeDiff / 1000) % 60
        } secounds to solve AGI!`
      );
      // reload page when alert is closed
      window.location.reload();
    }
  }, [itemName, progress, startTime]);

  useEffect(() => {
    if (startTime === null) {
      setStartTime(new Date().getTime());
    }
  }, [startTime]);

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
      <progress
        className={progress <= 100 ? "progressLow" : "progressHigh"}
        value={progress <= 100 ? progress : progress - 100}
        max="100"
      />
      {progress <= 100 ? (
        <p style={{ fontSize: "10px", width: "50px", display: "block" }}>
          Building {progress.toFixed(1)}%
        </p>
      ) : progress < 200 ? (
        <p style={{ fontSize: "10px", width: "50px", display: "block" }}>
          Refining {(progress - 100).toFixed(1)}%
        </p>
      ) : (
        <p
          style={{
            fontSize: "10px",
            width: "50px",
            display: "block",
            color: "green",
          }}
        >
          Done
        </p>
      )}
    </li>
  );
};

export default WorkButton;
