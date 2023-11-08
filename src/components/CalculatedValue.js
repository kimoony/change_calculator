import "../style/CalculatedValue.css";

function CalculatedValue({
  weightValue,
  setWeightValue,
  cash,
  changeCash,
  setChangeCash,
  onClickReset,
  sum,
  weightId,
}) {
  const resultValue = () => {
    setChangeCash(cash - sum);
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
              <div key={it.id}>
                {it.weight} 원
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
          {cash !== null ? <h3>받은비용: {cash} 원</h3> : null}
        </div>
        <div className="calculBox">
          <button className="calculBtn" onClick={resultValue}>
            계산
          </button>
        </div>
      </section>
      {changeCash > 0 ? (
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
