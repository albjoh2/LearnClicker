import { FC } from "react";
import UpgradeButton from "./UpgradeButton";

interface UpgradeItemsContainerProps {
  itemNames: [][];
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
        {Object.entries(itemNames).map(([itemNameKey, itemNameValues]) => {
          return (
            <UpgradeButton
              key={itemNameKey}
              itemTitle={itemNameKey}
              itemName={itemNameValues}
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
