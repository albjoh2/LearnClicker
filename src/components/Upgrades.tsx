import { FC } from "react";
import UpgradeButton from "./UpgradeButton";
import { useState } from "react";

interface UpgradesProps {
  count: number;
  setCount: (count: number) => void;
  pointsPerSec: number;
  setPointsPerSec: (pointsPerSec: number) => void;
}

const Upgrades: FC<UpgradesProps> = ({
  count,
  setCount,
  pointsPerSec,
  setPointsPerSec,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#151515",
        top: "0",
        left: "0",
        bottom: "0",
        width: "20%",
      }}
    >
      <h2>Upgrades</h2>
      <ul>
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
        <UpgradeButton
          count={count}
          setCount={setCount}
          pointsPerSec={pointsPerSec}
          setPointsPerSec={setPointsPerSec}
        />
      </ul>
    </div>
  );
};

export default Upgrades;
