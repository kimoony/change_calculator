import React from "react";
import "../style/WeightNCharge.css";

function WeightNCharge() {
  return (
    <section className="postWeightCharge">
      <section className="postWeight">
        <h4>무게</h4>
        <select name="weight" id="weight">
          <option value="default">선택</option>
          <option value="5g">5g</option>
        </select>
      </section>
      <section className="postCharge">
        <div className="cashCharge">
          <h4>받은 돈</h4>
          <div id="fiveThousand">5,000</div>
          <div>/</div>
          <div id="tenThousand">10,000</div>
        </div>
        <input type="number" placeholder="직접입력" />
      </section>
    </section>
  );
}

export default WeightNCharge;
