import "../style/CalculatedValue.css";
import { IoMdRefresh } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function CalculatedValue({
  weightValue,
  setWeightValue,
  weightId,
  inputWeight,
  onClickReset,
  isChecked,
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
        <div className="menu">
          <h3 className="menu_type">종류</h3>
          <h3 className="menu_weight">무게</h3>
          <h3 className="menu_price">단가</h3>
          <h3 className="menu_quantity">수량</h3>
          <h3 className="resetBtn" onClick={onClickReset}>
            <IoMdRefresh />
          </h3>
        </div>
        <div className="weightValue">
          <div>
            {weightValue.map((it) => (
              <ul key={it.id}>
                <li className="itValue">
                  <h3 className="itValue_type">{it.type}</h3>
                  {it.tNf ? (
                    <h3 className="itValue_weight" style={{ color: "hotpink" }}>
                      {it.weight}g
                    </h3>
                  ) : (
                    <h3 className="itValue_weight" style={{ color: "ccc" }}>
                      {it.weight}g
                    </h3>
                  )}
                  <h3 className="itValue_price">
                    {it.price * it.quantity.toLocaleString("ko-KR")} 원
                  </h3>
                  <div className="itValue_quantity">
                    <div
                      className="Btn minus"
                      onClick={() =>
                        it.quantity > 1 && quantityHandler(it.id, -1)
                      }
                    >
                      <FaMinusCircle />
                    </div>
                    <h4 className="it_quantity">{it.quantity}</h4>
                    <div
                      className="Btn plus"
                      onClick={() => quantityHandler(it.id, 1)}
                    >
                      <FaPlusCircle />
                    </div>
                  </div>
                  <div
                    className="removeBtn"
                    onClick={() => removeWeightValue(it.id)}
                  >
                    <MdDeleteForever />
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default CalculatedValue;
