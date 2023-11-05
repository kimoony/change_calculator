import "./style/App.css";
import TopMenu from "./components/TopMenu";
import WeightNCharge from "./components/WeightNCharge";
import { useState } from "react";
import CalculatedValue from "./components/CalculatedValue";

function App() {
  const [weightShow, setWeightShow] = useState(false);
  const [typeChecked, setTypeChecked] = useState("");
  const [weightValue, setWeightValue] = useState(null);
  const [cash, setCash] = useState(null);
  const [changeCash, setChangeCash] = useState(0);

  // 초기화
  const onClickReset = () => {
    setWeightValue(null);
    setCash(null);
    setTypeChecked("");
    setWeightShow(false);
    setChangeCash(0);
  };

  return (
    <section className="mainBox">
      <h1>등기 거스름돈 계산기</h1>
      <TopMenu setWeightShow={setWeightShow} setTypeChecked={setTypeChecked} />
      {weightShow === true ? (
        <WeightNCharge
          typeChecked={typeChecked}
          clickWeightValue={setWeightValue}
          setCash={setCash}
          onClickReset={onClickReset}
        />
      ) : null}
      <section className="changeCashBox">
        {weightValue !== null || cash !== null ? (
          <CalculatedValue
            weightValue={Number(weightValue)}
            cash={cash}
            changeCash={changeCash}
            setChangeCash={setChangeCash}
          />
        ) : null}
      </section>
    </section>
  );
}

export default App;
