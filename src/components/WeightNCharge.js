import React, { useState } from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
import NewFastRegisterWeight from "./weightType/NewFastRegisterWeight";
import ReceiveCash from "./ReceiveCash";
import CalculatedValue from "./CalculatedValue";
import { SumAndTotal } from "./SumAndTotal";

function WeightNCharge({
  typeChecked,
  weightValue,
  clickWeightValue,
  // cash,
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

  return (
    <section className="postBox">
      <section className="postInputReslutBox">
        <SumAndTotal
          sum={sum}
          changeCash={changeCash}
          quantitySum={quantitySum}
          onClickClose={onClickClose}
        />
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
                {typeChecked === "익일" ? (
                  <NewFastRegisterWeight
                    weightValue={weightValue}
                    clickWeightValue={clickWeightValue}
                    weightId={weightId}
                    resultValue={resultValue}
                    isChecked={isChecked}
                    inputWeight={inputWeight}
                    setInputWeight={setInputWeight}
                    typeChecked={typeChecked}
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
                    typeChecked={typeChecked}
                  />
                ) : typeChecked === "일반" ? (
                  <PostWeight
                    weightValue={weightValue}
                    clickWeightValue={clickWeightValue}
                    weightId={weightId}
                    resultValue={resultValue}
                    isChecked={isChecked}
                    inputWeight={inputWeight}
                    setInputWeight={setInputWeight}
                    typeChecked={typeChecked}
                  />
                ) : null}
              </div>
            </section>
            <section className="postCharge">
              <ReceiveCash
                setCash={setCash}
                resultValue={resultValue}
                changeCash={changeCash}
              />
            </section>
          </section>
        </section>
      </section>
      <section className="changeCashBox">
        <CalculatedValue
          weightValue={weightValue}
          setWeightValue={clickWeightValue}
          onClickReset={onClickReset}
          weightId={weightId}
        />
      </section>
    </section>
  );
}

export default WeightNCharge;
