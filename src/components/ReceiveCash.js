import "../style/ReceiveCash.css";

function ReceiveCash({ setCash, resultValue }) {
  const onChaneValue = (e) => setCash(e.target.value);
  return (
    <section>
      <div className="cashCharge">
        <h4>받은 돈</h4>
        <input
          type="number"
          className="inputValue"
          placeholder="받은금액입력"
          onChange={onChaneValue}
          onKeyDown={(e) => e.key === "Enter" && resultValue()}
        />
      </div>
    </section>
  );
}

export default ReceiveCash;
