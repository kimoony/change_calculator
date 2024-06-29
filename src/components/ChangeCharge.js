import React from "react";
import "../style/ChangeCharge.css";

function ChangeCharge({ changeCash }) {
  return (
    <section>
      <h1 className="cash">{`${changeCash.toLocaleString("ko-KR")}원`}</h1>
    </section>
  );
}

export default ChangeCharge;
