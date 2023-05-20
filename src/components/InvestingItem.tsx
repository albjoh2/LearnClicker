import { FC, useState, useEffect } from "react";

interface InvestingItemProps {
  itemName: string;
  currency: number;
  setCurrency: (currency: number) => void;
  risk: number;
  probabilityOfSuccess: number;
  price: number;
}

const InvestingItem: FC<InvestingItemProps> = ({
  itemName,
  currency,
  setCurrency,
  risk,
  probabilityOfSuccess,
  price,
}) => {
  const [investedMoney, setInvestedMoney] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInvestedMoney(
        (prevMoney) =>
          prevMoney +
          (Math.random() - probabilityOfSuccess) * investedMoney * risk
      );
    }, 1000); // Increment every second

    return () => {
      clearInterval(interval);
    };
  }, [investedMoney]);

  const handleBuyClick = () => {
    if (currency >= price) {
      setCurrency(currency - price);
      setInvestedMoney(investedMoney + price);
    }
  };

  const handleSellClick = () => {
    if (investedMoney >= price) {
      setCurrency(currency + price);
      setInvestedMoney(investedMoney - price);
    }
  };

  return (
    <li style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleSellClick}>-</button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <p style={{ width: "60px", textAlign: "left" }}>{itemName}</p>
          <p>{price.toLocaleString()} kr</p>
          <p>invested: {investedMoney.toFixed(0)} kr</p>
        </div>
        <button onClick={handleBuyClick}>+</button>
      </div>
    </li>
  );
};

export default InvestingItem;
