import { FC } from "react";
import WorkButton from "./WorkButton";

interface WorkItemsContainerProps {
  itemNames: string[];
  category: string;
  exp: number;
  setExp: (count: number) => void;
  currency: number;
  setCurrency: (currency: number) => void;
  setup: number;
  moneyPerSec: number;
  setMoneyPerSec: (moneyPerSecond: number) => void;
  difficulty: number[];
}

const WorkItemsContainer: FC<WorkItemsContainerProps> = ({
  itemNames,
  category,
  exp,
  setExp,
  currency,
  setCurrency,
  setup,
  moneyPerSec,
  setMoneyPerSec,
  difficulty,
}) => {
  return (
    <div>
      <h3>{category}</h3>
      <ul>
        {itemNames.map((itemName, i) => {
          return (
            <WorkButton
              key={itemName}
              itemName={itemName}
              currency={currency}
              setCurrency={setCurrency}
              exp={exp}
              setExp={setExp}
              setup={setup}
              moneyPerSec={moneyPerSec}
              setMoneyPerSec={setMoneyPerSec}
              difficulty={difficulty[i]}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WorkItemsContainer;
