import React from "react";
import "../../style/weightType/RegisterWeight.css";

function RegisterWeight({
  weightValue,
  clickWeightValue,
  weightId,
  resultValue,
  isChecked,
  inputWeight,
  setInputWeight,
}) {
  const onChangeValue = (e) => {
    setInputWeight(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // weight if
    if (isChecked === true && inputWeight <= 5) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 2500,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight <= 25) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 2530,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight <= 50) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 2550,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 51) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 2620,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 101) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 2740,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 151) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 2860,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 201) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 2980,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 251) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3100,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 301) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3220,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 351) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3340,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 401) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3460,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 451) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3580,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 501) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3700,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 551) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3820,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 601) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3940,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 651) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4060,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 701) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4180,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 751) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4300,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 801) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4420,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 851) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4540,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 901) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4660,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 951) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4780,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1001) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 4900,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1201) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 5020,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1401) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 5140,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1601) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 5260,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (1600 < inputWeight) {
      const newWeight = {
        id: weightId.current,
        type: "등기",
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 5380,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    }
    console.log(inputWeight);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        className="weightNum"
        value={inputWeight}
        onChange={onChangeValue}
        placeholder="무게입력"
        onKeyDown={(e) => e.key === "Enter" && resultValue()}
      />
      {/* <button className="weightBtn" type="submit">
        입력
      </button> */}
    </form>
  );
}

export default RegisterWeight;
