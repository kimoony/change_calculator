import React, { useState } from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
import NewFastRegisterWeight from "./weightType/NewFastRegisterWeight";
import ReceiveCash from "./ReceiveCash";
import CalculatedValue from "./CalculatedValue";

function WeightNCharge({
  typeChecked,
  weightValue,
  clickWeightValue,
  cash,
  setCash,
  onClickReset,
  onClickClose,
  weightId,
  sum,
  resultValue,
  changeCash,
  setChangeCash,
  quantitySum,
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
            총 합계: {sum > 0 ? sum.toLocaleString("ko-KR") : 0} 원
          </h3>
          <h3 className="cash">
            거스름 돈: {changeCash > 0 ? changeCash.toLocaleString("ko-KR") : 0}{" "}
            원
          </h3>
          <h3 className="quantity">총 건수: {quantitySum}</h3>;
        </section>
        <section className="closeBox">
          <buton className="closeBtn" onClick={onClickClose}>
            x
          </buton>
        </section>
      </section>
      <section className="postWeightCharge">
        <section className="inputWeightCharge">
          <section className="postWeight">
            <div className="selectBox">
              <h4>{typeChecked} 무게</h4>
              <input
                type="checkbox"
                name="Out of standard"
                id="1"
                onChange={checkboxHandler}
                className="checkBox"
              />
              <p>규격</p>
            </div>
            <div className="selectBox">
              {typeChecked === "익일특급" ? (
                <NewFastRegisterWeight
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
              ) : typeChecked === "일반우편" ? (
                <PostWeight
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
        <section className="changeCashBox">
          {weightValue.length !== 0 || cash !== null ? (
            <CalculatedValue
              weightValue={weightValue}
              setWeightValue={clickWeightValue}
              cash={cash}
              setCash={setCash}
              changeCash={changeCash}
              setChangeCash={setChangeCash}
              onClickReset={onClickReset}
              sum={sum}
              weightId={weightId}
              resultValue={resultValue}
              inputWeight={inputWeight}
            />
          ) : null}
        </section>
      </section>
    </section>
  );
}

export default WeightNCharge;
