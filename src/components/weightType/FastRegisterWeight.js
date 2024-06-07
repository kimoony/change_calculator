// import React from "react";

// function FastRegisterWeight({ weightValue, clickWeightValue, weightId }) {
//   const onSelect = (e) => {
//     const newWeight = {
//       weight: Number(e.target.value),
//       id: weightId.current,
//       quantity: 1,
//     };
//     weightId.current += 1;
//     clickWeightValue([...weightValue, newWeight]);
//   };
//   return (
//     <section>
//       <select name="weight" id="weight" onChange={onSelect}>
//         <option value="">선택</option>
//         <option value="3500">5g 규격</option>
//         <option value="3530">25g 규격</option>
//         <option value="3550">50g 구격</option>
//         <option value="3620">50g 규격 외</option>
//         <option value="3740">100g</option>
//         <option value="3860">150g</option>
//         <option value="3980">200g</option>
//         <option value="4100">250g</option>
//         <option value="4220">300g</option>
//         <option value="4340">350g</option>
//         <option value="4460">400g</option>
//         <option value="4580">450g</option>
//         <option value="4700">500g</option>
//         <option value="4820">550g</option>
//         <option value="4940">600g</option>
//         <option value="5060">650g</option>
//         <option value="5180">700g</option>
//         <option value="5300">750g</option>
//         <option value="5420">800g</option>
//         <option value="5540">850g</option>
//         <option value="5660">900g</option>
//         <option value="5780">950g</option>
//         <option value="5900">1000g</option>
//         <option value="6020">1200g</option>
//         <option value="6140">1400g</option>
//         <option value="6260">1600g</option>
//         <option value="6380">1800g</option>
//       </select>
//     </section>
//   );
// }

// export default FastRegisterWeight;
