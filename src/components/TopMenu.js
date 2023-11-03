import React from "react";
import "../style/TopMenu.css";

function TopMenu({ setWeightShow, typeChecked, setTypeChecked }) {
  return (
    <section className="postType">
      <div
        className="type"
        onClick={() => {
          setWeightShow(true);
          setTypeChecked("일반우편");
        }}
      >
        일반우편
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
          setTypeChecked("익일특급");
        }}
      >
        익일특급
      </div>
    </section>
  );
}

export default TopMenu;
