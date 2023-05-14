import { FC, useState } from "react";

interface UpgradeButtonProps {
  itemName: string;
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
  const [price, setPrice] = useState(10);

  const handleClick = () => {
    if (currency >= price) {
      setCount(count + price);
      setCurrency(currency - price);
      setPrice(price * 2);
    }
  };
  return (
    <li onClick={handleClick}>
      {itemName} {price} kr
    </li>
  );
};

export default UpgradeButton;
