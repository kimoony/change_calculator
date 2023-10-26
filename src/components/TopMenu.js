import React from "react";
import "../style/TopMenu.css";

function TopMenu() {
  return (
    <section className="postType">
      <div className="type">일반우편</div>
      <div className="type">등기</div>
      <div className="type">익일특급</div>
    </section>
  );
}

export default TopMenu;
