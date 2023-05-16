import { FC } from "react";
import WorkItemsContainer from "./WorkItemsContainer";

interface WorkProps {
  exp: number;
  setExp: (exp: number) => void;
  money: number;
  setMoney: (money: number) => void;
  setup: number;
  expPerSec: number;
  setExpPerSec: (expPerSec: number) => void;
  moneyPerSec: number;
  setMoneyPerSec: (moneyPerSec: number) => void;
}

const Work: FC<WorkProps> = ({
  exp,
  setExp,
  money,
  setMoney,
  setup,
  moneyPerSec,
  setMoneyPerSec,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#151515",
        top: "0",
        right: "0",
        bottom: "0",
        width: "25%",
      }}
    >
      <h2>Work</h2>
      <ul>
        <WorkItemsContainer
          category="Projects"
          itemNames={[
            "Online Game",
            "Social Media",
            "Solve Accessible Crypto",
            "Solve AGI",
          ]}
          exp={exp}
          setExp={setExp}
          setup={setup}
          currency={money}
          setCurrency={setMoney}
          moneyPerSec={moneyPerSec}
          setMoneyPerSec={setMoneyPerSec}
        />
        <WorkItemsContainer
          category="Freelance"
          itemNames={["Daddys company", "Gaming", "Startup"]}
          exp={exp}
          setExp={setExp}
          setup={setup}
          currency={money}
          setCurrency={setMoney}
          moneyPerSec={moneyPerSec}
          setMoneyPerSec={setMoneyPerSec}
        />
        <WorkItemsContainer
          category="Employment"
          itemNames={["web developer", "software engineer", "CTO"]}
          exp={exp}
          setExp={setExp}
          setup={setup}
          currency={money}
          setCurrency={setMoney}
          moneyPerSec={moneyPerSec}
          setMoneyPerSec={setMoneyPerSec}
        />
      </ul>
    </div>
  );
};

export default Work;
