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
  console.log(typeChecked);

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
    console.log(currentValue);
    return (acc + currentValue.price) * currentValue.quantity;
  }, 0);

  const quantitySum = weightValue.reduce((acc, currentValue) => {
    return acc + currentValue.quantity;
  }, 0);

  const resultValue = () => {
    setChangeCash(cash - sum);
  };
  console.log(typeChecked);
  return (
    <section className="mainBox">
      <h1 className="title" onClick={onClickReset}>
        등기 거스름돈 계산기
      </h1>
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
      {/* <section className="changeCashBox">
        {weightValue.length !== 0 || cash !== null ? (
          <CalculatedValue
            weightValue={weightValue}
            setWeightValue={setWeightValue}
            cash={cash}
            setCash={setCash}
            changeCash={changeCash}
            setChangeCash={setChangeCash}
            onClickReset={onClickReset}
            sum={sum}
            weightId={weightId}
            resultValue={resultValue}
          />
        ) : null}
      </section> */}
    </section>
  );
}

export default App;
