import React, { useState } from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
// import FastRegisterWeight from "./weightType/FastRegisterWeight";
import NewFastRegisterWeight from "./weightType/NewFastRegisterWeight";
import ReceiveCash from "./ReceiveCash";

function WeightNCharge({
  typeChecked,
  weightValue,
  clickWeightValue,
  setCash,
  onClickReset,
  weightId,
  resultValue,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputWeight, setInputWeight] = useState();
  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };
  console.log(isChecked);
  return (
    <section className="postWeightCharge">
      <div className="closeBox">
        <buton className="closeBtn" onClick={onClickReset}>
          x
        </buton>
      </div>
      <section className="postWeight">
        <div className="selectBox">
          <input
            type="checkbox"
            name="Out of standard"
            id="1"
            onChange={checkboxHandler}
          />
          <p>규격 외</p>
        </div>
        <h4>{typeChecked} 무게</h4>
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
  );
}

export default WeightNCharge;
