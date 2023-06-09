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
            "Online game",
            "Social media",
            "Solve accessible crypto",
            "Solve artificial general intelligence",
          ]}
          exp={exp}
          setExp={setExp}
          setup={setup}
          currency={money}
          setCurrency={setMoney}
          moneyPerSec={moneyPerSec}
          setMoneyPerSec={setMoneyPerSec}
          difficulty={[10000, 10000000, 10000000000, 100000000000]}
          payPerSec={[0.5, 5, 40, 80]}
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
          difficulty={[100, 1000000, 1000000000]}
          payPerSec={[0.1, 2, 20]}
        />
        <WorkItemsContainer
          category="Employment"
          itemNames={["Web developer", "Software engineer", "CTO"]}
          exp={exp}
          setExp={setExp}
          setup={setup}
          currency={money}
          setCurrency={setMoney}
          moneyPerSec={moneyPerSec}
          setMoneyPerSec={setMoneyPerSec}
          difficulty={[1000, 100000, 100000000]}
          payPerSec={[0.25, 1, 10]}
        />
      </ul>
    </div>
  );
};

export default Work;
