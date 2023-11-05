import React from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
import FastRegisterWeight from "./weightType/FastRegisterWeight";
import ReceiveCash from "./ReceiveCash";

function WeightNCharge({
  typeChecked,
  clickWeightValue,
  setCash,
  onClickReset,
}) {
  return (
    <section className="postWeightCharge">
      <div className="closeBox">
        <h2 className="closeBtn" onClick={onClickReset}>
          x
        </h2>
      </div>
      <section className="postWeight">
        <h4>{typeChecked} 무게</h4>
        <div className="selectBox">
          {typeChecked === "일반우편" ? (
            <PostWeight clickWeightValue={clickWeightValue} />
          ) : typeChecked === "등기" ? (
            <RegisterWeight clickWeightValue={clickWeightValue} />
          ) : typeChecked === "익일특급" ? (
            <FastRegisterWeight clickWeightValue={clickWeightValue} />
          ) : null}
          <button className="addBtn">+</button>
        </div>
      </section>
      <section className="postCharge">
        <ReceiveCash setCash={setCash} />
      </section>
    </section>
  );
}

export default WeightNCharge;
