import { FC, useState, useEffect } from "react";

interface InvestingItemProps {
  itemName: string;
  currency: number;
  setCurrency: (currency: number) => void;
  risk: number;
}

const InvestingItem: FC<InvestingItemProps> = ({
  itemName,
  currency,
  setCurrency,
  risk,
}) => {
  const [price, setPrice] = useState(100);
  const [investedMoney, setInvestedMoney] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInvestedMoney(
        (prevMoney) => prevMoney + (Math.random() - 0.4) * investedMoney * risk
      );
    }, 1000); // Increment every second

    return () => {
      clearInterval(interval);
    };
  }, [investedMoney]);

  const handleClick = () => {
    if (currency >= price) {
      setCurrency(currency - price);
      setInvestedMoney(investedMoney + price);
      setPrice(price);
    }
  };
  return (
    <li onClick={handleClick}>
      {itemName} {price} kr {investedMoney.toFixed(0)} kr
    </li>
  );
};

export default InvestingItem;
