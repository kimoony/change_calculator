import React, { useState } from "react";
import "../style/TopMenu.css";

function TopMenu({
  setWeightShow,
  setTypeChecked,
  setWeightValue,
  setCash,
  setChangeCash,
}) {
  const [isClick, setIsClick] = useState(true);

  return (
    <section className="postType">
      <div
        className="type"
        onClick={() => {
          setWeightShow(true);
          setTypeChecked("익일");
        }}
      >
        익일특급
      </div>
      <div
        className="type"
        onClick={() => {
          setWeightShow(true);
          setTypeChecked("등기");
        }}
      >
        등기
      </div>
      <div
        className="type"
        onClick={() => {
          setWeightShow(true);
          setTypeChecked("일반");
        }}
      >
        일반우편
      </div>
    </section>
  );
}

export default TopMenu;
