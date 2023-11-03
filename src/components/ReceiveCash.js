import React from "react";
import "../style/ReceiveCash.css";

function ReceiveCash() {
  return (
    <div>
      <div className="cashCharge">
        <h4>받은 돈</h4>
        <div id="fiveThousand">5000</div>
        <div>/</div>
        <div id="tenThousand">10000</div>
      </div>
      <input type="number" placeholder="직접입력" />
    </div>
  );
}

export default ReceiveCash;
