import "../style/CalculatedValue.css";

function CalculatedValue({
  weightValue,
  cash,
  changeCash,
  setChangeCash,
  onClickReset,
}) {
  const resultValue = () => {
    setChangeCash(cash - weightValue);
    console.log(typeof cash);
    console.log(typeof weightValue);
    console.log(changeCash);
  };

  return (
    <section className="valueBox">
      <div>
        <h2>등기비용: {weightValue} 원</h2>
        {cash !== null ? <h2>받은비용: {cash} 원</h2> : null}
      </div>
      <div className="calculBox">
        <button className="calculBtn" onClick={resultValue}>
          계산
        </button>
      </div>
      {changeCash > 0 ? (
        <div className="resultBox">
          <h1 className="changeCash">{changeCash} 원</h1>
          <div className="resetBox">
            <button className="resetBtn" onClick={onClickReset}>
              초기화
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default CalculatedValue;
