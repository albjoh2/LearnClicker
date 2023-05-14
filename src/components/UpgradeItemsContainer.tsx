import { FC } from "react";
import UpgradeButton from "./UpgradeButton";

interface UpgradeItemsContainerProps {
  itemNames: string[];
  category: string;
  count: number;
  setCount: (count: number) => void;
  currency: number;
  setCurrency: (currency: number) => void;
}

const UpgradeItemsContainer: FC<UpgradeItemsContainerProps> = ({
  itemNames,
  category,
  count,
  setCount,
  currency,
  setCurrency,
}) => {
  return (
    <div>
      <h3>{category}</h3>
      <ul>
        {itemNames.map((itemName) => {
          return (
            <UpgradeButton
              key={itemName}
              itemName={itemName}
              count={count}
              setCount={setCount}
              currency={currency}
              setCurrency={setCurrency}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UpgradeItemsContainer;
