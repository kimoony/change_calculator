import "../style/CalculatedValue.css";

function CalculatedValue({
  weightValue,
  setWeightValue,
  weightId,
  inputWeight,
}) {
  const quantityHandler = (id, value) => {
    const weightValueList = [...weightValue];
    weightValueList[id].quantity += value;
    setWeightValue(weightValueList);
  };

  const removeWeightValue = (id) => {
    const newValue = weightValue.filter((it) => it.id !== id);
    setWeightValue(newValue);
    weightId.current -= 1;
  };

  return (
    <section className="calculatorBox">
      <section className="valueBox">
        <div className="weightValue">
          <h3>
            {weightValue.map((it) => (
              <div className="itValue" key={it.id}>
                <p>{it.weight}g</p>
                <p>{it.price.toLocaleString("ko-KR")} 원</p>
                <button
                  className="Btn minus"
                  onClick={() => it.quantity > 1 && quantityHandler(it.id, -1)}
                >
                  -
                </button>
                <span className="quantity">{it.quantity}</span>
                <button
                  className="Btn plus"
                  onClick={() => quantityHandler(it.id, 1)}
                >
                  +
                </button>
                <button
                  className="removeBtn"
                  onClick={() => removeWeightValue(it.id)}
                >
                  x
                </button>
              </div>
            ))}
          </h3>
        </div>
      </section>
    </section>
  );
}

export default CalculatedValue;
