import React, { useState } from "react";

function CalculatedValue({ weightValue, cash }) {
  const [changeCash, setChangeCash] = useState(0);

  const resultValue = () => {
    setChangeCash(cash - weightValue);
    console.log(typeof cash);
    console.log(typeof weightValue);
    console.log(changeCash);
  };

  return (
    <div>
      {cash}-{weightValue}
      <button onClick={resultValue}>계산</button>
      <div>
        {changeCash > 0 ? (
          <h3>{changeCash}</h3>
        ) : (
          <h5>받은 돈을 압력 또는 확인해주세요!</h5>
        )}
      </div>
    </div>
  );
}

export default CalculatedValue;
