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

  const onClickClear = () => {
    setWeightValue(null);
    setCash(null);
    setTypeChecked("");
    setWeightShow(false);
  };

  return (
    <section className="body">
      <TopMenu
        setWeightShow={setWeightShow}
        typeChecked={typeChecked}
        setTypeChecked={setTypeChecked}
      />
      {weightShow === true ? (
        <WeightNCharge
          setWeightShow={setWeightShow}
          typeChecked={typeChecked}
          clickWeightValue={setWeightValue}
          setCash={setCash}
        />
      ) : null}
      {weightValue !== null || cash !== null ? (
        <div>
          <CalculatedValue weightValue={Number(weightValue)} cash={cash} />
          <button onClick={onClickClear}>초기화</button>
        </div>
      ) : null}
    </section>
  );
}

export default App;
