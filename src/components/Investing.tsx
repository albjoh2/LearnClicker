import { FC, useState } from "react";
import InvestingItem from "./InvestingItem";

interface InvestingProps {
  itemNames: string[];
  currency: number;
  setCurrency: (currency: number) => void;
  risk: number[];
  probabilityOfSuccess: number[];
}

const Investing: FC<InvestingProps> = ({
  itemNames,
  currency,
  setCurrency,
  risk,
  probabilityOfSuccess,
}) => {
  const [price, setPrice] = useState(100);

  const handleHigherPrice = () => {
    if (price < 100000) {
      setPrice(price * 10);
    }
  };

  const handleLowerPrice = () => {
    if (price > 1) {
      setPrice(price / 10);
    }
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button style={{ color: "#141c3f" }} onClick={handleLowerPrice}>
          -
        </button>
        <h3>Investments</h3>
        <button style={{ color: "#141c3f" }} onClick={handleHigherPrice}>
          +
        </button>
      </div>
      <ul>
        {itemNames.map((itemName, i) => {
          return (
            <InvestingItem
              key={itemName}
              itemName={itemName}
              currency={currency}
              risk={risk[i]}
              probabilityOfSuccess={probabilityOfSuccess[i]}
              setCurrency={setCurrency}
              price={price}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Investing;
