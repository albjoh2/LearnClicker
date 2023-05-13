import { FC, useState } from "react";

interface UpgradeButtonProps {
  count: number;
  setCount: (count: number) => void;
  pointsPerSec: number;
  setPointsPerSec: (pointsPerSec: number) => void;
}

const UpgradeButton: FC<UpgradeButtonProps> = ({
  count,
  setCount,
  pointsPerSec,
  setPointsPerSec,
}) => {
  const [price, setPrice] = useState(10);

  const handleClick = () => {
    if (count >= price) {
      setCount(count - price);
      setPointsPerSec(pointsPerSec + 1);
      setPrice(price * 2);
    }
  };
  return <li onClick={handleClick}>UpgradeButton {price} kr</li>;
};

export default UpgradeButton;
