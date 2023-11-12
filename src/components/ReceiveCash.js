import "../style/ReceiveCash.css";

function ReceiveCash({ setCash, resultValue }) {
  const onChaneValue = (e) => setCash(e.target.value);
  return (
    <div>
      <div className="cashCharge">
        <h4>받은 돈</h4>
        {/* <div id="fiveThousand" onClick={() => setCash(5000)} onKeyDown={(e) => e.key === "Enter" && resultValue()}>
          5000원
        </div>
        <div>/</div>
        <div id="tenThousand" onClick={() => setCash(10000)} onKeyDown={(e) => e.key === "Enter" && resultValue()}>
          10000원
        </div> */}
        <input
          type="number"
          className="inputValue"
          placeholder="직접입력"
          onChange={onChaneValue}
          onKeyDown={(e) => e.key === "Enter" && resultValue()}
        />
      </div>
    </div>
  );
}

export default ReceiveCash;
