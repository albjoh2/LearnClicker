import { FC } from "react";
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
  return (
    <div style={{ backgroundColor: "#55aaff", paddingBottom: "20px" }}>
      <h3 style={{ color: "#141c3f" }}>Investments</h3>
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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Investing;
