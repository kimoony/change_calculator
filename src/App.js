import "./style/App.css";
import TopMenu from "./components/TopMenu";
import WeightNCharge from "./components/WeightNCharge";
import { useRef, useState } from "react";
// import CalculatedValue from "./components/CalculatedValue";

function App() {
  const [weightShow, setWeightShow] = useState(true);
  const [typeChecked, setTypeChecked] = useState("익일");
  const [weightValue, setWeightValue] = useState([]);
  const [cash, setCash] = useState(null);
  const [changeCash, setChangeCash] = useState(0);

  const weightId = useRef(0);

  // 초기화
  const onClickReset = () => {
    setWeightValue([]);
    setCash(null);
    setTypeChecked(typeChecked);
    setChangeCash(0);
    weightId.current = 0;
  };

  const onClickClose = () => {
    setWeightValue([]);
    setCash(null);
    setTypeChecked(null);
    setWeightShow(false);
    setChangeCash(0);
    weightId.current = 0;
  };

  const sum = weightValue.reduce((acc, currentValue) => {
    // console.log(currentValue);
    return (acc + currentValue.price) * currentValue.quantity;
  }, 0);

  const quantitySum = weightValue.reduce((acc, currentValue) => {
    return acc + currentValue.quantity;
  }, 0);

  const resultValue = () => {
    setChangeCash(cash - sum);
  };
  return (
    <section className="mainBox">
      <header>
        <p>made kimoony</p>
      </header>
      <h1 className="title" onClick={onClickReset}>
        등기 거스름돈 계산기
      </h1>
      <TopMenu
        weightShow={weightShow}
        setWeightShow={setWeightShow}
        typeChecked={typeChecked}
        setTypeChecked={setTypeChecked}
        setWeightValue={setWeightValue}
        weightValue={weightValue}
        clickWeightValue={setWeightValue}
        cash={cash}
        setCash={setCash}
        onClickReset={onClickReset}
        onClickClose={onClickClose}
        sum={sum}
        weightId={weightId}
        resultValue={resultValue}
        changeCash={changeCash}
        setChangeCash={setChangeCash}
        quantitySum={quantitySum}
      />
      {weightShow === true ? (
        <WeightNCharge
          typeChecked={typeChecked}
          weightValue={weightValue}
          clickWeightValue={setWeightValue}
          cash={cash}
          setCash={setCash}
          onClickReset={onClickReset}
          onClickClose={onClickClose}
          sum={sum}
          weightId={weightId}
          resultValue={resultValue}
          changeCash={changeCash}
          setChangeCash={setChangeCash}
          quantitySum={quantitySum}
        />
      ) : null}
    </section>
  );
}

export default App;
