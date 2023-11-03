import React from "react";

function RegisterWeight({ clickWeightValue }) {
  return (
    <section>
      <select name="weight" id="weight">
        <option value="default">선택</option>
        <option value="5g">5g</option>
      </select>
    </section>
  );
}

export default RegisterWeight;
