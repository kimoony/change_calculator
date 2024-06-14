import React, { useState } from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
import NewFastRegisterWeight from "./weightType/NewFastRegisterWeight";
import ReceiveCash from "./ReceiveCash";

function WeightNCharge({
  typeChecked,
  weightValue,
  clickWeightValue,
  cash,
  setCash,
  onClickReset,
  weightId,
  sum,
  resultValue,
  changeCash,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputWeight, setInputWeight] = useState();
  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };
  console.log(isChecked);
  return (
    <section className="postBox">
      <section className="middleBox">
        <section className="sumNchangeCash">
          <h3 className="sum">
            총 합계: {sum > 0 ? sum.toLocaleString("ko-KR") : null}
          </h3>
          <h3 className="cash">
            거스름 돈:{" "}
            {changeCash > 0 ? changeCash.toLocaleString("ko-KR") : null}
          </h3>
        </section>
        <section className="closeBox">
          <buton className="closeBtn" onClick={onClickReset}>
            x
          </buton>
        </section>
      </section>
      <section className="postWeightCharge">
        <section className="postWeight">
          <div className="selectBox">
            <h4>{typeChecked} 무게</h4>
            <input
              type="checkbox"
              name="Out of standard"
              id="1"
              onChange={checkboxHandler}
            />
            <p>규격</p>
          </div>
          <div className="selectBox">
            {typeChecked === "일반우편" ? (
              <PostWeight
                weightValue={weightValue}
                clickWeightValue={clickWeightValue}
                weightId={weightId}
                resultValue={resultValue}
                isChecked={isChecked}
                inputWeight={inputWeight}
                setInputWeight={setInputWeight}
              />
            ) : typeChecked === "등기" ? (
              <RegisterWeight
                weightValue={weightValue}
                clickWeightValue={clickWeightValue}
                weightId={weightId}
                resultValue={resultValue}
                isChecked={isChecked}
                inputWeight={inputWeight}
                setInputWeight={setInputWeight}
              />
            ) : typeChecked === "익일특급" ? (
              <NewFastRegisterWeight
                weightValue={weightValue}
                clickWeightValue={clickWeightValue}
                weightId={weightId}
                resultValue={resultValue}
                isChecked={isChecked}
                inputWeight={inputWeight}
                setInputWeight={setInputWeight}
              />
            ) : null}
          </div>
        </section>
        <section className="postCharge">
          <ReceiveCash setCash={setCash} resultValue={resultValue} />
        </section>
      </section>
    </section>
  );
}

export default WeightNCharge;
