import React from "react";
import "../style/SumAndChangeCash.css";
import { CgCloseO } from "react-icons/cg";

export const SumAndChangeCash = ({
  sum,
  changeCash,
  quantitySum,
  onClickClose,
}) => {
  return (
    <div>
      <section className="info">
        {changeCash < 0 ? (
          <h3>거스름 돈이 '-'입니다. 합계 또는 받은 돈을 확인하세요!</h3>
        ) : (
          <h3></h3>
        )}
      </section>
      <section className="middleBox">
        <section className="sumNchangeCash">
          <h3 className="sum">
            총 합계: {sum > 0 ? sum.toLocaleString("ko-KR") : 0} 원
          </h3>
          <h3 className="cash">
            거스름 돈: {changeCash > 0 ? changeCash.toLocaleString("ko-KR") : 0}
            원
          </h3>
          <h3 className="quantity">총 건수: {quantitySum}</h3>
        </section>
        <section className="closeBox">
          <buton className="closeBtn" onClick={onClickClose}>
            <CgCloseO />
          </buton>
        </section>
      </section>
    </div>
  );
};
