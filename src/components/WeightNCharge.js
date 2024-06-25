import React, { useState } from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
import NewFastRegisterWeight from "./weightType/NewFastRegisterWeight";
import ReceiveCash from "./ReceiveCash";
import CalculatedValue from "./CalculatedValue";
import { SumAndChangeCash } from "./SumAndChangeCash";

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

  return (
    <section className="postBox">
      <SumAndChangeCash
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
              isChecked={isChecked}
              typeChecked={typeChecked}
            />
          ) : null}
        </section>
      </section>
    </section>
  );
}

export default WeightNCharge;
