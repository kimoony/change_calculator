import React from "react";

function RegisterWeight({ weightValue, clickWeightValue, weightId }) {
  const onSelect = (e) => {
    const newWeight = {
      weight: Number(e.target.value),
      id: weightId.current,
      quantity: 1,
    };
    weightId.current += 1;
    clickWeightValue([...weightValue, newWeight]);
  };
  return (
    <section>
      <select name="weight" id="weight" onChange={onSelect}>
        <option value="">선택</option>
        <option value="2500">5g 규격</option>
        <option value="2530">25g 규격</option>
        <option value="2550">50g 구격</option>
        <option value="2620">50g 규격 외</option>
        <option value="2740">100g</option>
        <option value="2860">150g</option>
        <option value="2980">200g</option>
        <option value="3100">250g</option>
        <option value="3220">300g</option>
        <option value="3340">350g</option>
        <option value="3460">400g</option>
        <option value="3580">450g</option>
        <option value="3700">500g</option>
        <option value="3820">550g</option>
        <option value="3940">600g</option>
        <option value="4060">650g</option>
        <option value="4180">700g</option>
        <option value="4300">750g</option>
        <option value="4420">800g</option>
        <option value="4540">850g</option>
        <option value="4660">900g</option>
        <option value="4780">950g</option>
        <option value="4900">1000g</option>
        <option value="5020">1200g</option>
        <option value="5140">1400g</option>
        <option value="5260">1600g</option>
        <option value="5380">1800g</option>
      </select>
    </section>
  );
}

export default RegisterWeight;
