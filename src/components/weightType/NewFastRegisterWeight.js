import "../../style/weightType/NewFastRegisterWeight.css";

function FastRegisterWeight({
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
        type: "익일",
        tNf: isChecked,
        weight: "규격 5",
        price: 3500,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight <= 25) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: "규격 25",
        price: 3530,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight <= 50) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: "규격 50",
        price: 3550,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight <= 50) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 50,
        price: 3620,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 101) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 100,
        price: 3740,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 151) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 150,
        price: 3860,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 201) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 200,
        price: 3980,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 251) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 250,
        price: 4100,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 301) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 300,
        price: 4220,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 351) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 350,
        price: 4340,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 401) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 400,
        price: 4460,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 451) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 450,
        price: 4580,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 501) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 500,
        price: 4700,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 551) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 550,
        price: 4820,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 601) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 600,
        price: 4940,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 651) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 650,
        price: 5060,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 701) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 700,
        price: 5180,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 751) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 750,
        price: 5300,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 801) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 800,
        price: 5420,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 851) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 850,
        price: 5540,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 901) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 900,
        price: 5660,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 951) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 950,
        price: 5780,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1001) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 1000,
        price: 5900,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1201) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 1200,
        price: 6020,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1401) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 1400,
        price: 6140,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1601) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: 1600,
        price: 6260,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (1600 < inputWeight) {
      const newWeight = {
        id: weightId.current,
        type: "익일",
        tNf: isChecked,
        weight: "1800",
        price: 6380,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    }
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
    </form>
  );
}

export default FastRegisterWeight;
