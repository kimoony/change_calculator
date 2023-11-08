import "./style/App.css";
import TopMenu from "./components/TopMenu";
import WeightNCharge from "./components/WeightNCharge";
import { useRef, useState } from "react";
import CalculatedValue from "./components/CalculatedValue";

function App() {
  const [weightShow, setWeightShow] = useState(false);
  const [typeChecked, setTypeChecked] = useState("");
  const [weightValue, setWeightValue] = useState([]);
  const [cash, setCash] = useState(null);
  const [changeCash, setChangeCash] = useState(0);

  const weightId = useRef(0);

  // 초기화
  const onClickReset = () => {
    setWeightValue([]);
    setCash(null);
    setTypeChecked("");
    setWeightShow(false);
    setChangeCash(0);
    weightId.current = 0;
  };
  // console.log(weightValue);
  // console.log(weightId);

  const sum = weightValue.reduce((acc, currentValue) => {
    return acc + currentValue.weight;
  }, 0);

  return (
    <section className="mainBox">
      <h1>등기 거스름돈 계산기</h1>
      <TopMenu
        setWeightShow={setWeightShow}
        setTypeChecked={setTypeChecked}
        setWeightValue={setWeightValue}
        setCash={setCash}
        setChangeCash={setChangeCash}
      />
      {weightShow === true ? (
        <WeightNCharge
          typeChecked={typeChecked}
          weightValue={weightValue}
          clickWeightValue={setWeightValue}
          setCash={setCash}
          onClickReset={onClickReset}
          sum={sum}
          weightId={weightId}
        />
      ) : null}
      <section className="changeCashBox">
        {weightValue.length !== 0 || cash !== null ? (
          <CalculatedValue
            weightValue={weightValue}
            setWeightValue={setWeightValue}
            cash={cash}
            changeCash={changeCash}
            setChangeCash={setChangeCash}
            onClickReset={onClickReset}
            sum={sum}
            weightId={weightId}
          />
        ) : null}
      </section>
    </section>
  );
}

export default App;
