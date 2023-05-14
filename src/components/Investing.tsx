import { FC } from "react";
import InvestingItem from "./InvestingItem";

interface InvestingProps {
  itemNames: string[];
  currency: number;
  setCurrency: (currency: number) => void;
  risk: number[];
}

const Investing: FC<InvestingProps> = ({
  itemNames,
  currency,
  setCurrency,
  risk,
}) => {
  return (
    <div style={{ backgroundColor: "#55aaff" }}>
      <h3>Investments</h3>
      <ul>
        {itemNames.map((itemName, i) => {
          return (
            <InvestingItem
              key={itemName}
              itemName={itemName}
              currency={currency}
              risk={risk[i]}
              setCurrency={setCurrency}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Investing;
