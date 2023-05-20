import { FC, useState } from "react";

interface UpgradeButtonProps {
  itemName: (string | number)[][];
  itemTitle: string;
  count: number;
  setCount: (count: number) => void;
  currency: number;
  setCurrency: (currency: number) => void;
}

const UpgradeButton: FC<UpgradeButtonProps> = ({
  itemName,
  itemTitle,
  count,
  setCount,
  currency,
  setCurrency,
}) => {
  const [price, setPrice] = useState(itemName[0][1]);
  const [upgradeCount, setUpgradeCount] = useState(0);

  const handleClick = () => {
    const price = Number(itemName[upgradeCount][1]);

    if (upgradeCount === itemName.length - 1 && currency >= price) {
      setCount(count + price);
      setCurrency(currency - price);
      setPrice("Done!");
      return;
    }

    const nextPrice = Number(itemName[upgradeCount + 1][1]);
    if (currency >= price) {
      if (price) {
        setCount(count + price);
        setCurrency(currency - price);
        setPrice(nextPrice);
        setUpgradeCount(upgradeCount + 1);
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
      <p>
        <span style={{ fontWeight: "900" }}>{itemTitle}:</span>{" "}
        {itemName[upgradeCount][0]}
      </p>{" "}
      <p style={price === "Done!" ? { color: "green" } : {}}>
        {price.toLocaleString()} {price === "Done!" ? "" : "kr"}
      </p>
    </li>
  );
};

export default UpgradeButton;
