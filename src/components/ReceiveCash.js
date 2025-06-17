import "../style/ReceiveCash.css";

function ReceiveCash({ setCash, changeCash, resultValue }) {
  const onChaneValue = (e) => setCash(e.target.value);
  return (
    <section>
      <div className="cashCharge">
        <h4>받은 돈</h4>
        <div className="inputCash">
          <input
            type="number"
            className="inputValue"
            placeholder="받은 금액 입력 후 Enter"
            onChange={onChaneValue}
            onKeyDown={(e) => e.key === "Enter" && resultValue()}
          />
          <button
            className="calculBtn"
            onClick={() => {
              resultValue();
            }}
          >
            계산
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReceiveCash;
