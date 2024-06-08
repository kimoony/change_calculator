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
    if (isChecked === true && inputWeight <= 50) {
      const newWeight = {
        id: weightId.current,
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3620,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight <= 5) {
      const newWeight = {
        id: weightId.current,
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3500,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 26) {
      const newWeight = {
        id: weightId.current,
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3530,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 51) {
      const newWeight = {
        id: weightId.current,
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 3550,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 101) {
      const newWeight = {
        id: weightId.current,
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
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
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 6260,
        quantity: 1,
      };
      weightId.current += 1;
      clickWeightValue([...weightValue, newWeight]);
      console.log(newWeight);
      setInputWeight("");
    } else if (inputWeight < 1801) {
      const newWeight = {
        id: weightId.current,
        tNf: isChecked,
        weight: Number(inputWeight),
        price: 6380,
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
        value={inputWeight}
        onChange={onChangeValue}
        onKeyDown={(e) => e.key === "Enter" && resultValue()}
      />
      <button type="submit">입력</button>
    </form>
  );
}

export default FastRegisterWeight;
