import "../style/ReceiveCash.css";

function ReceiveCash({ setCash }) {
  const onChaneValue = (e) => setCash(e.target.value);
  return (
    <div>
      <div className="cashCharge">
        <h4>받은 돈</h4>
        <div id="fiveThousand" onClick={() => setCash(5000)}>
          5000
        </div>
        <div>/</div>
        <div id="tenThousand" onClick={() => setCash(10000)}>
          10000
        </div>
      </div>
      <input type="number" placeholder="직접입력" onChange={onChaneValue} />
    </div>
  );
}

export default ReceiveCash;
