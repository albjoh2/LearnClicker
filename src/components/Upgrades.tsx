import { FC } from "react";
import UpgradeItemsContainer from "./UpgradeItemsContainer";
import Investing from "./Investing";

interface UpgradesProps {
  itemNames: any;
  exp: number;
  setExp: (exp: number) => void;
  money: number;
  setMoney: (money: number) => void;
  setup: number;
  setSetup: (setup: number) => void;
  expPerSec: number;
  setExpPerSec: (expPerSec: number) => void;
}

const Upgrades: FC<UpgradesProps> = ({
  itemNames,
  exp,
  setExp,
  money,
  setMoney,
  setup,
  setSetup,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#151515",
        top: "0",
        left: "0",
        bottom: "0",
        width: "25%",
      }}
    >
      <h2>Upgrades</h2>
      <ul>
        <UpgradeItemsContainer
          category={"Hardware"}
          itemNames={itemNames.Hardware}
          count={setup}
          setCount={setSetup}
          currency={money}
          setCurrency={setMoney}
        />
        <UpgradeItemsContainer
          category="Software"
          itemNames={itemNames.Software}
          count={setup}
          setCount={setSetup}
          currency={money}
          setCurrency={setMoney}
        />
        <UpgradeItemsContainer
          category="Libarary"
          itemNames={itemNames.Reasearch}
          count={exp}
          setCount={setExp}
          currency={money}
          setCurrency={setMoney}
        />
        <Investing
          itemNames={["Interest fund", "Big CORP", "Tech giant", "Startup"]}
          risk={[0.01, 0.05, 0.1, 0.5]}
          probabilityOfSuccess={[0.3, 0.4, 0.45, 0.48]}
          currency={money}
          setCurrency={setMoney}
        />
      </ul>
    </div>
  );
};

export default Upgrades;
