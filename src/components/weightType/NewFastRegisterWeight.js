import "../../style/weightType/NewFastRegisterWeight.css";

function FastRegisterWeight({
  weightValue,
  clickWeightValue,
  weightId,
  resultValue,
  isChecked,
  inputWeight,
  setInputWeight,
  typeChecked,
  sameQuality,
}) {
  const onChangeValue = (e) => {
    setInputWeight(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // weight if
    if (isChecked === true && inputWeight < 5) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 5,
        price: 3800,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight < 25) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 25,
        price: 3830,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (isChecked === true && inputWeight < 50) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 50,
        price: 3850,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 50) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 50,
        price: 3920,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 100) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 100,
        price: 4040,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 150) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 150,
        price: 4160,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 200) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 200,
        price: 4280,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 250) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 250,
        price: 4400,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 300) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 300,
        price: 4520,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 350) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 350,
        price: 4640,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 400) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 400,
        price: 4760,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 450) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 450,
        price: 4880,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 500) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 500,
        price: 5000,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 550) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 550,
        price: 5120,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 600) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 600,
        price: 5240,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 650) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 650,
        price: 5360,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 700) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 700,
        price: 5480,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 750) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 750,
        price: 5600,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 800) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 800,
        price: 5720,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 850) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 850,
        price: 5840,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 900) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 900,
        price: 5960,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 950) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 950,
        price: 6080,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1000) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1000,
        price: 6200,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1200) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1200,
        price: 6320,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1400) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1400,
        price: 6440,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1600) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1600,
        price: 6560,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (1600 <= inputWeight) {
      const newWeight = {
        id: weightId.current,
        type: typeChecked,
        tNf: isChecked,
        weight: 1800,
        price: 6680,
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
        placeholder="무게입력 후 Enter"
        onKeyDown={(e) => e.key === "Enter"}
      />
    </form>
  );
}

export default FastRegisterWeight;
