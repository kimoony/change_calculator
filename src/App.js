import "./style/App.css";
import TopMenu from "./components/TopMenu";
import WeightNCharge from "./components/WeightNCharge";
import { useState } from "react";
import CalculatedValue from "./components/CalculatedValue";

function App() {
  const [weightShow, setWeightShow] = useState(false);
  const [typeChecked, setTypeChecked] = useState("");
  const [weightValue, setWeightValue] = useState(null);

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
        />
      ) : null}
      {weightValue !== null ? (
        <CalculatedValue weightValue={weightValue} />
      ) : null}
    </section>
  );
}

export default App;
