import "../style/CalculatedValue.css";

function CalculatedValue({
  weightValue,
  setWeightValue,
  cash,
  setCash,
  changeCash,
  setChangeCash,
  onClickReset,
  sum,
  weightId,
  resultValue,
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
            등기비용:
            {weightValue.map((it) => (
              <div className="itValue" key={it.id}>
                <p>{it.weight} 원</p>
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
          {sum > 0 ? <h3>합계: {sum} 원</h3> : ""}
          {cash !== null && weightValue.length !== 0 ? (
            <h3>받은비용: {cash} 원</h3>
          ) : (
            setCash(null) && setChangeCash(0)
          )}
        </div>
        <div className="calculBox">
          <button className="calculBtn" onClick={resultValue}>
            계산
          </button>
        </div>
      </section>
      {weightValue.length === 0 ? (
        setChangeCash(0)
      ) : changeCash > 0 ? (
        <div className="resultBox">
          <h1 className="changeCash">{changeCash} 원</h1>
          <div className="resetBox">
            <button className="resetBtn" onClick={onClickReset}>
              초기화
            </button>
          </div>
        </div>
      ) : cash < sum ? (
        <h2 style={{ color: "red", fontWeight: "bold" }}>
          합계보다 받은 돈이 적습니다!
        </h2>
      ) : (
        ""
      )}
    </section>
  );
}

export default CalculatedValue;
