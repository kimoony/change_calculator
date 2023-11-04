import React from "react";

function PostWeight({ clickWeightValue }) {
  const onSelect = (e) => {
    clickWeightValue(e.target.value);
  };
  return (
    <section>
      <select name="weight" id="weight" onChange={onSelect}>
        <option value="">선택</option>
        <option value="400">5g 규격</option>
        <option value="430">25g 규격</option>
        <option value="450">50g 구격</option>
        <option value="520">50g 규격 외</option>
        <option value="640">100g</option>
        <option value="760">150g</option>
        <option value="880">200g</option>
        <option value="1000">250g</option>
        <option value="1120">300g</option>
        <option value="1240">350g</option>
        <option value="1360">400g</option>
        <option value="1480">450g</option>
        <option value="1600">500g</option>
        <option value="1720">550g</option>
        <option value="1840">600g</option>
        <option value="1960">650g</option>
        <option value="2080">700g</option>
        <option value="2200">750g</option>
        <option value="2320">800g</option>
        <option value="2440">850g</option>
        <option value="2560">900g</option>
        <option value="2680">950g</option>
        <option value="2800">1000g</option>
        <option value="2920">1200g</option>
        <option value="3040">1400g</option>
        <option value="3160">1600g</option>
        <option value="3280">1800g</option>
      </select>
    </section>
  );
}

export default PostWeight;
