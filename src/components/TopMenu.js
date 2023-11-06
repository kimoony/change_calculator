import React from "react";
import "../style/TopMenu.css";

function TopMenu({
  setWeightShow,
  setTypeChecked,
  setWeightValue,
  setCash,
  setChangeCash,
}) {
  return (
    <section className="postType">
      <div
        className="type"
        onClick={() => {
          setWeightShow(true);
          setTypeChecked("일반우편");
          setWeightValue(null);
          setCash(null);
          setChangeCash(0);
        }}
      >
        일반우편
      </div>
      <div
        className="type"
        onClick={() => {
          setWeightShow(true);
          setTypeChecked("등기");
          setWeightValue(null);
          setCash(null);
          setChangeCash(0);
        }}
      >
        등기
      </div>
      <div
        className="type"
        onClick={() => {
          setWeightShow(true);
          setTypeChecked("익일특급");
          setWeightValue(null);
          setCash(null);
          setChangeCash(0);
        }}
      >
        익일특급
      </div>
    </section>
  );
}

export default TopMenu;
