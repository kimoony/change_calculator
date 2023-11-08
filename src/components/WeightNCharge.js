import React from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
import FastRegisterWeight from "./weightType/FastRegisterWeight";
import ReceiveCash from "./ReceiveCash";

function WeightNCharge({
  typeChecked,
  weightValue,
  clickWeightValue,
  setCash,
  onClickReset,
  weightId,
}) {
  return (
    <section className="postWeightCharge">
      <div className="closeBox">
        <buton className="closeBtn" onClick={onClickReset}>
          x
        </buton>
      </div>
      <section className="postWeight">
        <h4>{typeChecked} 무게</h4>
        <div className="selectBox">
          {typeChecked === "일반우편" ? (
            <PostWeight
              weightValue={weightValue}
              clickWeightValue={clickWeightValue}
              weightId={weightId}
            />
          ) : typeChecked === "등기" ? (
            <RegisterWeight
              weightValue={weightValue}
              clickWeightValue={clickWeightValue}
              weightId={weightId}
            />
          ) : typeChecked === "익일특급" ? (
            <FastRegisterWeight
              weightValue={weightValue}
              clickWeightValue={clickWeightValue}
              weightId={weightId}
            />
          ) : null}
        </div>
      </section>
      <section className="postCharge">
        <ReceiveCash setCash={setCash} />
      </section>
    </section>
  );
}

export default WeightNCharge;
