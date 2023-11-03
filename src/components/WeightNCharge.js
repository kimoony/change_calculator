import React from "react";
import "../style/WeightNCharge.css";
import PostWeight from "./weightType/PostWeight";
import RegisterWeight from "./weightType/RegisterWeight";
import FastRegisterWeight from "./weightType/FastRegisterWeight";
import ReceiveCash from "./ReceiveCash";

function WeightNCharge({ setWeightShow, typeChecked, clickWeightValue }) {
  const closeWeightCharge = () => setWeightShow(false);

  return (
    <section className="postWeightCharge">
      <h2 className="closeBtn" onClick={closeWeightCharge}>
        X
      </h2>
      <section className="postWeight">
        <h4>{typeChecked} 무게</h4>
        {typeChecked === "일반우편" ? (
          <PostWeight clickWeightValue={clickWeightValue} />
        ) : typeChecked === "등기" ? (
          <RegisterWeight clickWeightValue={clickWeightValue} />
        ) : typeChecked === "익일특급" ? (
          <FastRegisterWeight clickWeightValue={clickWeightValue} />
        ) : null}
      </section>
      <section className="postCharge">
        <ReceiveCash />
      </section>
    </section>
  );
}

export default WeightNCharge;
