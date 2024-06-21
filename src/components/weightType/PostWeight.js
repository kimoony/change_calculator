import React from "react";
import "../../style/weightType/postWeight.css";

function PostWeight({
  weightValue,
  clickWeightValue,
  weightId,
  resultValue,
  isChecked,
  inputWeight,
  setInputWeight,
  typeChecked,
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
        type: typeChecked,
        tNf: isChecked,
        weight: 5,
        price: 400,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight <= 25) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 25,
        price: 430,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight <= 50) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 50,
        price: 450,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 51) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: "50g",
        price: 520,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 101) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 100,
        price: 640,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 151) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 150,
        price: 760,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 201) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 200,
        price: 880,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 251) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 250,
        price: 1000,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 301) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 300,
        price: 1120,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 351) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 350,
        price: 1240,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 401) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 400,
        price: 1360,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 451) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 450,
        price: 1480,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 501) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 500,
        price: 1600,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 551) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 550,
        price: 1720,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 601) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 600,
        price: 1840,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 651) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 650,
        price: 1960,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 701) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 700,
        price: 2080,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 751) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 750,
        price: 2200,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 801) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 800,
        price: 2320,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 851) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 850,
        price: 2440,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 901) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 900,
        price: 2560,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 951) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 950,
        price: 2680,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1001) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1000,
        price: 2800,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1201) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1200,
        price: 2920,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1401) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1400,
        price: 3040,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1601) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1600,
        price: 3160,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (1600 < inputWeight) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1800,
        price: 3280,
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

export default PostWeight;
