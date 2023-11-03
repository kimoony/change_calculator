import React from "react";

function FastRegisterWeight({ clickWeightValue }) {
  return (
    <section>
      <select name="weight" id="weight">
        <option value="default">선택</option>
        <option value="5g">20g</option>
      </select>
    </section>
  );
}

export default FastRegisterWeight;
