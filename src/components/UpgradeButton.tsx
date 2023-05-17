import { FC, useState } from "react";

interface UpgradeButtonProps {
  itemName: (string | number)[][];
  count: number;
  setCount: (count: number) => void;
  currency: number;
  setCurrency: (currency: number) => void;
}

const UpgradeButton: FC<UpgradeButtonProps> = ({
  itemName,
  count,
  setCount,
  currency,
  setCurrency,
}) => {
  const [price, setPrice] = useState(itemName[0][1]);
  const [upgradeCount, setUpgradeCount] = useState(0);

  const handleClick = () => {
    const NextPrice = Number(itemName[upgradeCount + 1][1]);
    const price = Number(itemName[upgradeCount][1]);
    if (currency >= price) {
      if (NextPrice) {
        setCount(count + price);
        setCurrency(currency - price);
        setPrice(NextPrice);
        setUpgradeCount(upgradeCount + 1);
      } else {
        console.log("Maxed out");
      }
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
      <p>{itemName[upgradeCount][0]}</p> <p>{price.toLocaleString()} kr</p>
    </li>
  );
};

export default UpgradeButton;
