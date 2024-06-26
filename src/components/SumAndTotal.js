import React from "react";
import "../style/SumAndTotal.css";
import { CgCloseO } from "react-icons/cg";

export const SumAndTotal = ({ sum, changeCash, quantitySum, onClickClose }) => {
  return (
    <section className="middleBox">
      <section className="sumNTotal">
        <h3 className="sum">
          총 합계: {sum > 0 ? sum.toLocaleString("ko-KR") : 0} 원
        </h3>
        <h3 className="quantity">총 건수: {quantitySum}</h3>
        <h3 className="cash">
          거스름 돈:
          {changeCash > 0
            ? changeCash.toLocaleString("ko-KR")
            : changeCash === 0
            ? 0
            : " x"}
          원
        </h3>
      </section>
      <section className="closeBox">
        <buton className="closeBtn" onClick={onClickClose}>
          <CgCloseO />
        </buton>
      </section>
    </section>
  );
};
